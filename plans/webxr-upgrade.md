# WebXR Upgrade Plan: Access Mars → Meta Quest 3 Compatibility

## Executive Summary

Access Mars is an A-Frame 0.6.0 WebVR 1.1 application built in 2017. The Meta Quest 3 browser supports only **WebXR** (the modern VR web standard), not legacy WebVR. This upgrade plan maps the migration from the deprecated WebVR 1.1 API stack to WebXR, enabling immersive VR sessions on Quest 3 and other modern WebXR headsets while preserving the existing 2D/360° experience for desktop and mobile.

**Target Architecture:** A-Frame 1.6.x (latest stable) with WebXR-backed controller handling, replacing the deprecated `webvr-ui` library, the custom `aframe-daydream-controller-component`, and the expired WebVR origin trial tokens.

---

## 1. Current Dependency Analysis

| Package | Current Version | Status | Target | Notes |
|---|---|---|---|---|
| `aframe` | `googlecreativelab/aframe#v0.6.0c-mod` (custom fork) | ❌ Deprecated | `aframe@1.6.1` (npm latest) | Custom fork has no updates; use official npm package. WebXR built-in from 1.0+. |
| `aframe-daydream-controller-component` | GitHub master (2017) | ❌ Obsolete | **Remove** | Daydream is discontinued. Quest Touch controllers use built-in `tracked-controls-webxr` / `laser-controls`. |
| `three.js` | Bundled within aframe fork (~r84) | ❌ Deprecated | Bundled with A-Frame 1.6.x (~r152+) | All custom shaders must be audited for Three.js API breaking changes. |
| `webvr-ui` | `^0.10.0` | ❌ Deprecated | **Remove** | Replace with custom WebXR button or A-Frame's built-in `vr-mode-ui`. |
| `tween.js` | `^16.6.0` | ⚠️ Still maintained | `^23.0.0` (or `@tweenjs/tween.js`) | API changes: constructor arguments changed. Needs audit of all `new TWEEN.Tween()` calls. |
| `browserify` | `^14.0.0` | ⚠️ Old version | Keep or upgrade to `^17+` | Still functional, but consider Vite for faster iteration. |
| `budo` | `^9.4.7` | ⚠️ Unmaintained | **Replace** | Consider `vite`, `esbuild-dev` or `watchify` + `browser-sync`. |
| `babelify` / `babel-preset-es2015` | Babel 6 | ❌ Deprecated | Babel 7+ or drop if using modern bundler | ES2015 is natively supported everywhere; may not need transpilation. |
| `bezier-easing` | `2.0.3` | ✅ Maintained | Keep | No changes expected. |
| `eventemitter3` | `2.0.2` | ✅ Maintained | `^5.0.0` | Minor version bump, check API compatibility. |
| `screenfull` | `^3.3.1` | ✅ Maintained | `^6.0.0` | API changes: no longer auto-polyfills. |
| `qs` | `6.4.0` | ✅ Maintained | `^6.13.0` | Minor bump, no breaking changes expected. |
| `whatwg-fetch` | `^2.0.3` | ✅ Maintained | Keep | Legacy polyfill, still works. |
| `promise-polyfill` | `6.0.2` | ✅ | Keep | Can also remove if targeting modern browsers only. |
| `sono` / `web-audio-player` / `ios-safe-audio-context` | Various | ⚠️ Unmaintained | **Risk area** | These audio libraries may need replacement. Verify they still work. |

---

## 2. A-Frame Upgrade Path: 0.6.0 → 1.6.x

### Version Roadmap

```
0.6.0 (2017, WebVR 1.1)
  │
  ├── 0.7.0  - Component API changes, buffer-geometry deprecated
  ├── 0.8.0  - raycaster refactoring
  ├── 0.9.0  - WebXR experimental support begins
  ├── 1.0.0  - WebXR default, WebVR support removed
  ├── 1.2.0  - tracked-controls-webxr component added
  ├── 1.3.0  - Controller button mapping improvements
  ├── 1.5.0  - hand-tracking, controller enhancements
  └── 1.6.x  - Latest stable (current)
```

### Key Breaking Changes (0.6.0 → 1.x)

1. **`BufferGeometry` becomes default** — `THREE.Geometry` removed. Any code using `new THREE.Geometry()` (found in `controller-parabola.js` at line 99) will break and must use `THREE.BufferGeometry`.
2. **`PlaneBufferGeometry` renamed to `PlaneGeometry`** — `controller-dot.js` line 43 and `controller-ray.js` line 38 use `PlaneBufferGeometry` which is removed in r125+.
3. **`THREE.UniformsUtils` moved** — `controller-arc.js` line 49 uses `THREE.UniformsUtils.clone()` — verify path still valid.
4. **`WebVRConfig` global removed** — `vr.js` lines 74-78 reference `WebVRConfig` which is a WebVR 1.1 polyfill artifact; must be removed.
5. **Scene methods `enterVR()` / `exitVR()` renamed** — `splash.js` line 106 calls `aScene.enterVR()`. In A-Frame 1.x, use `aScene.enterVR()` (still works as alias to WebXR) and `aScene.exitVR()`, but internal implementation now uses `navigator.xr.requestSession()`.
6. **`AFRAME.utils.device.isMobile()` preserved** — should still work.
7. **`AFRAME.utils.device.isGearVR()` removed** — `platform-utils.js` line 38 will need updating (Quest 3 detection via user-agent or WebXR API).
8. **`vr-mode-ui` default behavior changed** — The app disables it (`vr-mode-ui="enabled: false"`) and uses a custom splash, so this won't be affected.
9. **`wasd-controls` still exists** but may need `wasd-controls="fly: true"` verification.
10. **Shader `material.shader` attribute syntax** — Custom shaders registered with `AFRAME.registerShader()` API may need updates.

---

## 3. File-by-File Code Change Inventory

### 3.1 `src/js/vr.js` — Main Entry Point

| Line(s) | Issue | Action |
|---|---|---|
| 22 | `require( 'aframe-daydream-controller-component' )` | ❌ Remove — Daydream is obsolete; replace with built-in `laser-controls` or `tracked-controls-webxr` |
| 23 | | |
| 74-78 | `WebVRConfig` global references | ❌ Remove entire block — WebVR 1.1 polyfill config is irrelevant |
| 70-71 | `THREE.TextureLoader.prototype.crossOrigin = undefined` | ⚠️ Verify still needed; may cause CORS issues on some browsers |

### 3.2 `public/index.html` — Entry Point

| Line(s) | Issue | Action |
|---|---|---|
| 30-34 | Origin Trial `<meta>` tags for WebVR (expired 2017) | ❌ Remove both `<meta http-equiv="origin-trial">` blocks |
| 171 | `<a-scene ...>` attributes | ✅ `vr-mode-ui="enabled: false"` still valid; `fog` attr may need syntax verification |
| 175 | `wasd-controls="fly: true"` | ⚠️ Verify `fly` mode works in A-Frame 1.x; might need `wasd-controls="fly: true"` → `wasd-controls="flyEnabled: true"` |
| 190 | `better-raycaster="... controllerType: controller"` | ⚠️ Controller handling unchanged, but the events it relies on may differ for WebXR controllers |

### 3.3 `src/js/splash/splash.js` — VR Entry Flow

| Line(s) | Issue | Action |
|---|---|---|
| 20 | `import * as webvrui from 'webvr-ui/build/webvr-ui'` | ❌ Replace entirely — `webvr-ui` uses `navigator.getVRDisplays()` (WebVR 1.1). Create custom WebXR check using `navigator.xr.isSessionSupported('immersive-vr')` |
| 55-59 | `new webvrui.EnterVRButton(...)` | ❌ Replace with custom button that calls `navigator.xr.requestSession('immersive-vr')` then passes session to A-Frame |
| 104-108 | `onEnterVR()` calling `aScene.enterVR()` | ⚠️ Still works in A-Frame 1.x (delegates to WebXR), but verify event order |
| 114 | `enterVRButton.on( 'ready', ...)` | ❌ Replace with custom ready detection |
| 115 | `enterVRButton.manager.defaultDisplay` | ❌ WebVR display object — use WebXR `XRSession` or `XRSystem` |
| 126-135 | `enterVRButton.on( 'enter' )` and `enterVRButton.on( 'exit' )` | ❌ Replace with `XRSession` `end` event and A-Frame's `enter-vr` / `exit-vr` events |
| 137-141 | `enterVRButton.on( 'error', ...)` | ❌ Replace with `navigator.xr.isSessionSupported()` fallback to 360 mode |
| 154 | `enterVRButton.sourceCanvas = aScene.renderer.domElement` | ❌ May not be needed with new approach |
| 174-186 | `enterVRButton.getVRDisplay()` | ❌ WebVR 1.1 call — replace with WebXR check |

### 3.4 `src/js/utils/platform-utils.js` — Platform Detection

| Line(s) | Issue | Action |
|---|---|---|
| 38 | `AFRAME.utils.device.isGearVR()` | ❌ Removed in A-Frame 1.x — replace with `isMobile()` or user-agent check for Quest |
| 89-112 | `getControllerType()` using `navigator.getVRDisplays()` | ❌ Entire method must be rewritten. Replace with WebXR-based detection: check `navigator.xr` availability, check controller profiles via `XRInputSource.profiles` |

### 3.5 `src/js/utils/compatibility.js` — Analytics

| Line(s) | Issue | Action |
|---|---|---|
| 24-36 | `navigator.getVRDisplays()` and `window.addEventListener('gamepadconnected', ...)` | ⚠️ `getGamepads()` still works. Remove `getVRDisplays()`. Keep gamepad detection for analytics. |

### 3.6 `src/js/components/better-raycaster.js` — Core Interaction

| Line(s) | Issue | Action |
|---|---|---|
| 117-118 | Listens for `buttonchanged` on controller | ⚠️ WebXR controllers emit `squeeze`, `select`, `squeezeend`, `selectend` events. The `buttonchanged` event from A-Frame 0.6 may be different in 1.x. Rewrite to use A-Frame 1.x's built-in `raycaster` with `tracked-controls-webxr` |
| 82 | `document.getElementById( 'daydream-debug' )` | ❌ Remove Daydream-specific reference |
| 93 | `AFRAME.utils.device.isMobile()` | ✅ Still works |
| 100-120 | `tryAddingInteraction()` — event listeners per device type | ⚠️ Desktop mouse/touch listeners likely fine. VR controller section needs rewrite for WebXR controller events (`controllerconnected`, `controllerdisconnected`, `triggerdown`, etc.) |

### 3.7 `src/js/core/scene.js` — Scene Manager

| Line(s) | Issue | Action |
|---|---|---|
| 56 | `this.controllerType = 'mouse-touch'` | ✅ Still relevant for input segmentation |
| 115-134 | Teleport logic listening to `terrain-cursor-up` | ⚠️ The event chain may differ with WebXR. Verify terrain cursor events still fire correctly |
| 190-210 | `tryAddingController()` — checking display names (GearVR, Daydream, Oculus, Vive) | ❌ Must be rewritten. In A-Frame 1.x, use `tracked-controls-webxr` component and let A-Frame auto-detect. Remove controller label detection. |

### 3.8 `src/js/components/controller-parabola.js` — Parabola Arc

| Line(s) | Issue | Action |
|---|---|---|
| 99 | `new THREE.Geometry()` | ❌ **BREAKING** — `THREE.Geometry` removed in r125. Must use `THREE.BufferGeometry` |
| 43 | `MeshLine` imports | ⚠️ `spite/mesh-line` may need updates for Three.js r152 |

### 3.9 `src/js/components/controller-ray.js` — Controller Ray

| Line(s) | Issue | Action |
|---|---|---|
| 38 | `new THREE.PlaneBufferGeometry(...)` | ❌ **BREAKING** — `PlaneBufferGeometry` renamed to `PlaneGeometry` |

### 3.10 `src/js/components/controller-dot.js` — Cursor Dot

| Line(s) | Issue | Action |
|---|---|---|
| 43 | `new THREE.PlaneBufferGeometry(1, 1)` | ❌ **BREAKING** — rename to `PlaneGeometry` |

### 3.11 `src/js/components/controller-arc.js` — Teleport Arc

| Line(s) | Issue | Action |
|---|---|---|
| 49 | `THREE.UniformsUtils.clone(...)` | ⚠️ Verify path — may need `THREE.UniformsUtils` → import from three |

### 3.12 `src/js/splash/exit-button.js` — Exit Button

| Line(s) | Issue | Action |
|---|---|---|
| 39-43 | Listens for `enter-360`, `enter-vr`, `exit-vr` events | ✅ A-Frame 1.x still fires these events |

### 3.13 Custom Shaders (40+ shader files in `src/js/shaders/`)

| Issue | Action |
|---|---|
| All shaders likely use older Three.js uniform/attribute patterns | ❌ **High risk** — each shader must be individually tested. Key things changed: `THREE.ShaderMaterial` uniforms API, `varying` modifiers, built-in uniforms |
| `controller-ray-shader.js`, `controller-dot-shader.js` | Test immediately with A-Frame 1.x's Three.js version |
| `terrain-shader.js` (likely custom terrain rendering) | ❌ **Critical risk** — terrain rendering is core to the app |

---

## 4. WebVR → WebXR API Migration Map

| WebVR 1.1 (Current) | WebXR (Target) | Files Affected |
|---|---|---|
| `navigator.getVRDisplays()` | `navigator.xr.isSessionSupported('immersive-vr')` | `platform-utils.js`, `splash.js`, `compatibility.js` |
| `VRDisplay.isPresenting` | `XRSession.visibilityState === 'visible'` | `platform-utils.js` |
| `display.requestPresent()` | `navigator.xr.requestSession('immersive-vr')` | `splash.js` |
| `display.exitPresent()` | `session.end()` | `splash.js` |
| `display.getFrameData()` | `XRFrame.getViewerPose()` | Internal to A-Frame |
| `display.displayName` | `XRInputSource.profiles[]` | `platform-utils.js`, `scene.js` |
| `VRDisplayEvent` / `vrdisplaypresentchange` | `XRSessionEvent` / `end` | `splash.js` |
| `Gamepad` objects (legacy) | `XRInputSource.gamepad` (new API) | `better-raycaster.js` |
| `WebVRConfig` global | Removed entirely | `vr.js` |
| Origin Trial meta tags | Not needed (WebXR is shipped) | `index.html` |
| `enterVR()` / `exitVR()` on A-Frame scene | Same method names, but delegate to WebXR | Supported in A-Frame 1.x |

---

## 5. Controller Input: Daydream (3DOF) → Quest Touch (6DOF)

### Current Architecture (Daydream)

```
Daydream Controller (3DOF: rotation only)
  └── aframe-daydream-controller-component
        └── provides controller pose via gamepad API
              └── better-raycaster listens for 'buttonchanged'
                    └── controls teleport arc + cursor
```

### Target Architecture (Quest Touch / WebXR)

```
Quest Touch Controller (6DOF: position + rotation)
  └── A-Frame 1.x built-in tracked-controls-webxr component
        └── provides XRInputSource with full pose
              └── A-Frame raycaster + laser-controls
                    └── custom better-raycaster (adapted)
                          └── controls teleport arc + cursor
```

### Key Changes Required

1. **Remove** `aframe-daydream-controller-component` import
2. **Add** `tracked-controls-webxr` attribute to the controller entity in HTML (built into A-Frame 1.x)
3. **Update** `better-raycaster` to handle WebXR controller events:
   - `selectstart` / `selectend` instead of `buttonchanged`
   - `squeeze` for grip button
   - Access `XRInputSource.gamepad` for button/thumbstick states
4. **6DOF teleport** — the existing parabola teleport system is already designed for arbitrary positions; it should work with 6DOF hand-positioned raycasts
5. **Remove** Daydream-specific debug element reference (`daydream-debug`)

---

## 6. Build System Updates

### Option A: Keep Browserify (Minimal Change)

```json
{
  "devDependencies": {
    "browserify": "^17.0.0",
    "watchify": "^4.0.0",
    "babelify": "^10.0.0",
    "@babel/core": "^7.26.0",
    "@babel/preset-env": "^7.26.0"
  },
  "scripts": {
    "start": "npm run build-css && npm run watch",
    "build": "browserify src/js/vr.js > public/js/vr.js",
    "buildmin": "browserify -g uglifyify src/js/vr.js | uglifyjs > public/js/vr.js",
    "build-css": "sass src/scss/main.scss public/css/vr.css",
    "watch": "watchify src/js/vr.js -o public/js/vr.js --verbose",
    "budo": "budo src/js/vr.js:js/vr.js --dir ./public --live --port 3002"
  }
}
```

### Option B: Modernize to Vite (Recommended)

- **Pros:** Fast HMR, ES module nativity, simpler config, modern browser targeting
- **Cons:** Requires restructuring entry points, may need shader import migration
- **Migration effort:** Medium-High

### Browser Targeting

Remove outdated browser support. Target:
- Chrome/Edge 90+
- Firefox 90+
- Safari 15.4+
- Quest Browser (Chromium-based, latest)

This allows dropping Babel transpilation for ES2015+ features.

---

## 7. Testing Approach

### Test Matrix

| Platform | Mode | Test Priority |
|---|---|---|
| **Quest 3 (native browser)** | Immersive VR | 🔴 **Critical** |
| **Quest 3 (native browser)** | 360/Flat | 🟡 High |
| **Desktop Chrome** | 360/Flat | 🟢 Medium |
| **Desktop Chrome** | WebXR (if headset connected) | 🟡 High |
| **iOS Safari** | 360/Flat | 🟢 Medium |
| **Android Chrome** | 360/Flat | 🟢 Medium |
| **Firefox Desktop** | 360/Flat | 🟢 Medium |

### Testing Steps

1. **Build verification** — `npm run build` succeeds without errors
2. **Page load** — Splash screen renders, no console errors
3. **Fallback detection** — Test with WebGL disabled
4. **Desktop interaction** — Click to teleport, open info cards, use map
5. **360 mode** — "Try it in 360" button works
6. **WebXR detection** — On Quest 3, "Enter VR" button appears
7. **Immersive VR** — Session starts, controllers render, teleport works
8. **Controller input** — Trigger click, teleport arc, menu interaction
9. **Site transitions** — Travel between all 5 sites via map
10. **Audio** — VO, SFX, atmosphere play correctly
11. **Regression** — All existing desktop/mobile features unchanged

### Key Testing Tools

```javascript
// Test WebXR availability in console
navigator.xr?.isSessionSupported('immersive-vr').then(console.log)

// Test A-Frame version
AFRAME.version
```

---

## 8. Risk Assessment

### 🔴 High Risk

| Risk | Impact | Mitigation |
|---|---|---|
| **Custom terrain shaders break with Three.js r152** | App renders incorrectly or not at all | Requires individual shader audit and testing on Quest 3. Some shaders may need shader chunk updates. |
| **`THREE.Geometry` removal breaks controller-parabola** | Teleport arc invisible | Rewrite `controller-parabola.js` to use `BufferGeometry` |
| **`webvr-ui` replacement** | VR entry flow broken | Complete rewrite of splash VR logic. Critical path. |
| **Audio library compatibility** | No sound or audio context errors | Test `sono`, `web-audio-player`, `ios-safe-audio-context` on modern browsers |

### 🟡 Medium Risk

| Risk | Impact | Mitigation |
|---|---|---|
| **Custom raycaster (better-raycaster) may conflict with A-Frame 1.x built-in raycaster** | Click events double-fire or not fire | Audit and simplify. A-Frame 1.x raycaster is more capable. |
| **Controller button mapping differences** | Teleport or selection doesn't work on Quest | Map Quest Touch buttons correctly (trigger = select, thumbstick = teleport) |
| **ShaderMaterial uniform API changes** | Shader-based rendering looks wrong | Test each custom shader individually |
| **`tween.js` v16 → v23 breaking changes** | Animations (fade, card transitions) break | Update Tween constructor calls |
| **`EventEmitter3` v2 → v5** | Event system edge cases | Test Scene singleton event emission |

### 🟢 Low Risk

| Risk | Impact | Mitigation |
|---|---|---|
| **`screenfull` v3 → v6** | Fullscreen API fails | Test fullscreen toggle in 360 mode |
| **`whatwg-fetch` polyfill** | Unnecessary on modern browsers | Can be removed |
| **CSS/SCSS** | Styling unchanged | No changes expected |
| **GLB model loading (Draco, glTF)** | Models don't load | Verify `draco-loader.js` and `gltf-loader.js` work with new Three.js |

---

## 9. Effort Estimation

| Phase | Scope | Estimated Files Touched |
|---|---|---|
| **Phase 1: Dependency Updates** | Update package.json, install new deps, remove old | 2-3 files |
| **Phase 2: A-Frame Upgrade** | Update import, fix Three.js API breaks | 3-5 components (controller-parabola, controller-ray, controller-dot, controller-arc) |
| **Phase 3: WebXR Entry Flow** | Rewrite splash.js VR logic, remove webvr-ui | 2 files (splash.js, entry VR button) |
| **Phase 4: Controller Rewrite** | Remove Daydream, add WebXR controller support | 4-5 files (better-raycaster, scene.js, platform-utils, controller components) |
| **Phase 5: Shader Audit** | Test and fix all custom shaders | 10+ shader files |
| **Phase 6: HTML Cleanup** | Remove origin trials, update scene attributes | 1-2 files |
| **Phase 7: Build System** | Update scripts, bundler config | 1-2 files (package.json, maybe Vite config) |
| **Phase 8: Testing** | Manual + automated testing on all platforms | 0 code files (testing only) |

---

## 10. Implementation Order (Recommended Sequence)

```
Week 1: Dependencies + Build System
  ├── Phase 1: Update package.json deps
  ├── Phase 2: Update build scripts
  └── Phase 7: Build system working with A-Frame 1.x

Week 2: Core Engine Upgrade
  ├── Phase 2: Fix Three.js breaking changes in components
  ├── Phase 5: Audit and fix custom shaders
  └── Verify app loads in 360 mode on desktop

Week 3: WebXR Integration
  ├── Phase 3: Rewrite VR entry flow (replace webvr-ui)
  └── Phase 6: Clean up HTML (remove origin trials)

Week 4: Controller Implementation
  ├── Phase 4: Rewrite controller system for WebXR
  ├── Update better-raycaster for tracked-controls-webxr
  └── End-to-end VR testing on Quest 3

Week 5: Polish + Testing
  ├── Phase 8: Full test matrix execution
  ├── Bug fixes
  └── Deployment
```

---

## 11. Specific Implementation Notes

### Rewriting `getControllerType()` in `platform-utils.js`

Current (WebVR):
```javascript
navigator.getVRDisplays().then(displays => {
    // Check display.displayName for 'Cardboard', 'Daydream', etc.
});
```

Target (WebXR):
```javascript
async function getControllerType() {
    if (!navigator.xr) return 'mouse-touch';
    const supported = await navigator.xr.isSessionSupported('immersive-vr');
    if (!supported) return 'mouse-touch';
    // Quest 3 will be detected as supporting immersive-vr
    // Controller type will be determined when XR session starts
    return 'controller';
}
```

### Controller Entity in HTML (`public/index.html`)

Current:
```html
<a-entity id="right-hand" shader='flat' better-raycaster="objects: .clickable; controllerType: controller" visible="false">
    <a-entity id="controller-ray" controller-ray></a-entity>
</a-entity>
```

Target:
```html
<a-entity id="right-hand" tracked-controls-webxr="hand: right" 
          laser-controls="hand: right"
          raycaster="objects: .clickable; far: 100"
          visible="false">
    <a-entity id="controller-ray" controller-ray></a-entity>
</a-entity>
```

### Splash VR Button (Replacement for `webvr-ui`)

Create a new module that:
1. Checks `navigator.xr.isSessionSupported('immersive-vr')`
2. If supported, shows "Enter VR" button
3. If not, shows "Enter 360" button (existing fallback)
4. On click, calls `aScene.enterVR()` (which delegates to WebXR in A-Frame 1.x)
5. Handles session end events via A-Frame's `exit-vr` event

---

## 12. Quick Reference: New vs. Removed Files

### Files to Remove
| File | Reason |
|---|---|
| `node_modules/aframe-daydream-controller-component` | Deprecated package |
| `node_modules/webvr-ui` | Deprecated WebVR library |
| Origin trial meta tags in `index.html` | Expired and unnecessary |

### Files to Add
| File | Purpose |
|---|---|
| Custom VR button module (in `src/js/splash/`) | Replace `webvr-ui` EnterVRButton |
| WebXR controller handler (in `src/js/utils/`) | Controller detection using `navigator.xr` |

### Files to Modify
| File | Changes |
|---|---|
| `package.json` | Update all dependencies, scripts |
| `src/js/vr.js` | Remove Daydream import, remove WebVRConfig |
| `src/js/splash/splash.js` | Replace webvr-ui with custom logic |
| `public/index.html` | Remove origin trials, update a-scene/controller entities |
| `src/js/utils/platform-utils.js` | Rewrite getControllerType() |
| `src/js/utils/compatibility.js` | Remove getVRDisplays() |
| `src/js/core/scene.js` | Rewrite tryAddingController() |
| `src/js/components/better-raycaster.js` | WebXR controller events |
| `src/js/components/controller-parabola.js` | BufferGeometry migration |
| `src/js/components/controller-ray.js` | PlaneBufferGeometry → PlaneGeometry |
| `src/js/components/controller-dot.js` | PlaneBufferGeometry → PlaneGeometry |
| `src/js/shaders/*.js` | Three.js r152 compatibility |