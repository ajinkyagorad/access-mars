# Runtime Error Analysis Report

## Environment

| Context | Value |
|---------|-------|
| A-Frame version | 1.8.0 |
| Three.js version | `npm:super-three@0.184.0` (Three.js r184) |
| Bundled file | `public/js/vr.js` (22,557 lines) |
| Build command | `browserify --exclude=aframe src/js/vr.js > public/js/vr.js` |

A-Frame 1.8.0 uses super-three@0.184.0, which corresponds to **Three.js r184**. This version removes many pre-r125 APIs including `SphereBufferGeometry`, `THREE.Loader.prototype.extractUrlBase`, `THREE.Geometry`, and `THREE.Uint32BufferAttribute`/`THREE.Uint16BufferAttribute`.

---

## Error 1: `THREE.Loader.prototype.extractUrlBase is not a function`

### Source
- **File:** [`src/js/third_party/three/gltf-loader.js`](src/js/third_party/three/gltf-loader.js:25)
- **Line:** 25
- **Bundled location:** `public/js/vr.js` ~line 19572

### Old API (removed in r125+)
```js
THREE.Loader.prototype.extractUrlBase( url )
```

### Replacement (Three.js r125+)
```js
// Extract the base path from a URL using standard URL parsing
url.substring( 0, url.lastIndexOf( '/' ) + 1 )
```

Or use the Three.js `THREE.LoaderUtils.decodeText()` approach — but the simplest replacement is the string manipulation above since `THREE.Loader` no longer has `extractUrlBase` in r184.

### Priority: **HIGH**
This is a direct crash that blocks GLTF model loading. All terrain models (Murray Buttes, Pahrump Hills) and any other GLTF assets will fail to load.

### Fix
Replace line 25 of [`src/js/third_party/three/gltf-loader.js`](src/js/third_party/three/gltf-loader.js:25):
```js
// BEFORE:
var path = this.path && ( typeof this.path === "string" ) ? this.path : THREE.Loader.prototype.extractUrlBase( url );

// AFTER:
var path = this.path && ( typeof this.path === "string" ) ? this.path : url.substring( 0, url.lastIndexOf( '/' ) + 1 );
```

---

## Error 2: `THREE.SphereBufferGeometry is not a constructor`

### Affected Files (4 files, 4 instances)

| # | File | Line | Old API | Replacement |
|---|------|------|---------|-------------|
| 1 | [`src/js/components/boundary-sphere.js`](src/js/components/boundary-sphere.js:33) | 33 | `new THREE.SphereBufferGeometry(0.5, 16, 16)` | `new THREE.SphereGeometry(0.5, 16, 16)` |
| 2 | [`src/js/components/fade-to-black.js`](src/js/components/fade-to-black.js:36) | 36 | `new THREE.SphereBufferGeometry(1.5)` | `new THREE.SphereGeometry(1.5)` |
| 3 | [`src/js/components/sky-blackout.js`](src/js/components/sky-blackout.js:20) | 20 | `new THREE.SphereBufferGeometry(6000, 64, 20)` | `new THREE.SphereGeometry(6000, 64, 20)` |
| 4 | [`src/js/components/sky-gradient.js`](src/js/components/sky-gradient.js:30) | 30 | `new THREE.SphereBufferGeometry(5000, 64, 20)` | `new THREE.SphereGeometry(5000, 64, 20)` |

### API Change Context
`SphereBufferGeometry` was deprecated in Three.js r125 and removed in later versions. `SphereGeometry` now extends `BufferGeometry` directly and is the canonical replacement — identical constructor signature.

### Priority: **HIGH**
Each of these crashes the component's `init()` function, causing the component to fail silently or throw. Boundary sphere, fade-to-black, sky blackout, and sky gradient components will all fail to initialize.

### Fix
Simple search-and-replace in all 4 files: replace `SphereBufferGeometry` with `SphereGeometry` (same constructor arguments).

---

## Error 3: `can't access property "material", this.text is undefined`

### Source
- **File:** [`src/js/components/info-card-text.js`](src/js/components/info-card-text.js:108-112)
- **Line:** 109
- **Bundled location:** `public/js/vr.js` ~line 11796

### Root Cause
The [`update()`](src/js/components/info-card-text.js:97) method accesses `this.el.object3D.children[0]` immediately after setting text attributes:

```js
update: function() {
    this.el.setAttribute( 'text', 'letterSpacing', this.data.letterSpacing );
    // ... other setAttribute calls ...
    this.el.setAttribute( 'text', 'opacity', Math.max( 0, this.opacity ) );

    // THIS IS THE PROBLEM:
    this.text = this.el.object3D.children[ 0 ];   // line 109
    this.text.material.depthTest = false;          // line 110 - CRASHES here
    this.text.material.transparent = true;
    this.text.material.needsUpdate = true;
},
```

The A-Frame `text` component creates its mesh **asynchronously** — text layout takes at least one frame after `setAttribute` is called. During the component's initial `update()` call (which fires during initialization, before any tick), the text mesh hasn't been created yet, so `this.el.object3D.children[0]` is `undefined`.

### Note
The [`tick()`](src/js/components/info-card-text.js:115) method (line 147) already handles this correctly with a guard:
```js
if ( this.el.object3D.children[ 0 ] ) {   // line 147 - safe check
    this.textGeometry = this.el.object3D.children[ 0 ].geometry;
```

The `update()` method must use the same guard pattern.

### Priority: **HIGH**
This crashes every time an `info-card-text` component initializes, including info cards, text headers, body copy, and index numbers. It also likely causes cascading failures in A-Frame's internal state (see Error 4).

### Fix
Add a guard before accessing `this.text` in [`src/js/components/info-card-text.js`](src/js/components/info-card-text.js:108-112):

```js
// BEFORE:
this.text = this.el.object3D.children[ 0 ];
this.text.material.depthTest = false;
this.text.material.transparent = true;
this.text.material.needsUpdate = true;

// AFTER:
this.text = this.el.object3D.children[ 0 ];
if ( this.text ) {
    this.text.material.depthTest = false;
    this.text.material.transparent = true;
    this.text.material.needsUpdate = true;
}
```

---

## Error 4: `can't access property "addVectors", t is undefined`

### Nature
This error originates from within A-Frame's internal code, not from the project's source directly. The message `"addVectors", t is undefined` indicates A-Frame is trying to call `Vector3.addVectors()` or similar on an undefined object.

### Likely Cause: Cascading Failure from Error 3
When [`info-card-text.js`](src/js/components/info-card-text.js:108-112) crashes in its `update()` method (Error 3), it can corrupt A-Frame's internal component initialization state. A-Frame expects component `update()` to complete without throwing. If it throws mid-execution, components registered later or parent components may find incomplete state.

### Secondary Concern: Hitbox Component ([`src/js/components/hitbox.js`](src/js/components/hitbox.js:78-84))

The `hitbox` component's [`resizeToThis()`](src/js/components/hitbox.js:78) method has a guard:

```js
resizeToThis: function( el ) {
    const obj = el.getObject3D( 'mesh' );
    if ( !obj ) return;                    // safe guard
    this.bounds = new THREE.Box3().setFromObject( obj );
    this.bounds.expandByScalar( this.data.expansion );
    this.updateHitboxMesh();
},
```

This guard prevents crashes when no mesh exists. However, [`updateHitboxMesh()`](src/js/components/hitbox.js:86) assumes `this.bounds` is initialized. If called from a code path that doesn't go through `resizeToThis` (e.g., if someone calls it directly), it would crash at line 88:

```js
this.mesh.position.copy( this.bounds.getCenter() );  // crashes if bounds undefined
```

### Additional Finding: Hitbox Geometry uses PlaneGeometry
At [`src/js/components/hitbox.js`](src/js/components/hitbox.js:35), the hitbox geometry is a `THREE.PlaneGeometry` — which is **not deprecated** and still valid in r184. No change needed here.

### Priority: **MEDIUM** (likely resolved by fixing Error 3)

### Recommendation
1. Fix Error 3 first (the `info-card-text` update method).
2. Add a safety guard in `updateHitboxMesh` to check `this.bounds` exists.
3. If the error persists, investigate A-Frame component registration ordering in [`src/js/vr.js`](src/js/vr.js:54-55) — ensure `hitbox` and `info-card-text` are registered after the components they depend on.

---

## Additional Deprecated APIs Found

### 5. Deprecated BufferAttribute Constructors

#### Source
- **File:** [`src/js/third_party/three/draco-loader.js`](src/js/third_party/three/draco-loader.js:319-321)
- **Lines:** 319-321

#### Old API
```js
geometry.setIndex(new (geometryBuffer.indices.length > 65535 ?
    THREE.Uint32BufferAttribute : THREE.Uint16BufferAttribute)
    (geometryBuffer.indices, 1));
```

#### Replacement
```js
geometry.setIndex(new THREE.BufferAttribute(geometryBuffer.indices, 1));
```

`THREE.BufferAttribute` handles both 16-bit and 32-bit indices automatically based on the array type passed. In modern Three.js (r125+), `Uint32BufferAttribute` and `Uint16BufferAttribute` are deprecated aliases.

#### Priority: **MEDIUM**
These may still work with deprecation warnings in r184 but will likely be removed in a future version.

---

### 6. Deprecated THREE.Geometry Check

#### Source
- **File:** [`src/js/third_party/spite/mesh-line.js`](src/js/third_party/spite/mesh-line.js:37)
- **Line:** 37

#### Old API
```js
if( typeof THREE.Geometry !== 'undefined' && g instanceof THREE.Geometry ) {
```

#### Context
`THREE.Geometry` was removed entirely in Three.js r125. In r184, `THREE.Geometry` is undefined. This code path will never execute, so it's effectively dead code. However, it won't cause a crash because of the `typeof` guard.

#### Priority: **LOW**
Dead code only — no crash, but should be cleaned up for forward compatibility.

---

### 7. Deprecated TriangleDrawMode References

#### Source
- **File:** [`src/js/third_party/three/draco-loader.js`](src/js/third_party/three/draco-loader.js:29, 66-68, 290, 316-317)
- **Lines:** 29, 66-68, 290, 316-317

#### Context
The `drawMode` property was removed from `BufferGeometry` in r125+. The Draco loader:
1. Stores `this.drawMode` as a numeric flag (line 29) — used internally for triangle strip logic
2. Has comments referencing `THREE.TrianglesDrawMode` and `THREE.TriangleStripDrawMode` (lines 66-68) — these are just comments
3. Uses `this.drawMode === 1` as a flag (line 290) — this is fine as internal logic
4. Has a comment acknowledging the removal (lines 316-317) — "drawMode was removed from BufferGeometry in Three.js r125+"

This is **not a bug** — the code correctly uses `drawMode` as a number flag for decoder logic, not attaching it to geometry. No changes needed.

#### Priority: **NONE** — handled correctly already

---

## Summary of Required Changes

| # | Priority | File | Line(s) | Change |
|---|----------|------|---------|--------|
| 1 | **HIGH** | [`src/js/third_party/three/gltf-loader.js`](src/js/third_party/three/gltf-loader.js:25) | 25 | Replace `THREE.Loader.prototype.extractUrlBase(url)` with `url.substring(0, url.lastIndexOf('/') + 1)` |
| 2a | **HIGH** | [`src/js/components/boundary-sphere.js`](src/js/components/boundary-sphere.js:33) | 33 | `SphereBufferGeometry` → `SphereGeometry` |
| 2b | **HIGH** | [`src/js/components/fade-to-black.js`](src/js/components/fade-to-black.js:36) | 36 | `SphereBufferGeometry` → `SphereGeometry` |
| 2c | **HIGH** | [`src/js/components/sky-blackout.js`](src/js/components/sky-blackout.js:20) | 20 | `SphereBufferGeometry` → `SphereGeometry` |
| 2d | **HIGH** | [`src/js/components/sky-gradient.js`](src/js/components/sky-gradient.js:30) | 30 | `SphereBufferGeometry` → `SphereGeometry` |
| 3 | **HIGH** | [`src/js/components/info-card-text.js`](src/js/components/info-card-text.js:108-112) | 109-112 | Add `if (this.text)` guard before accessing `this.text.material` |
| 4 | **MEDIUM** | [`src/js/components/hitbox.js`](src/js/components/hitbox.js:86-98) | 88 | Add `if (this.bounds)` guard in `updateHitboxMesh()` |
| 5 | **MEDIUM** | [`src/js/third_party/three/draco-loader.js`](src/js/third_party/three/draco-loader.js:319-321) | 319-321 | Replace `THREE.Uint32BufferAttribute`/`THREE.Uint16BufferAttribute` with `THREE.BufferAttribute` |
| 6 | **LOW** | [`src/js/third_party/spite/mesh-line.js`](src/js/third_party/spite/mesh-line.js:37) | 37 | Remove dead `THREE.Geometry` check (or leave as-is — no crash risk) |

---

## Recommended Fix Order

1. **Fix Error 3** ([`info-card-text.js`](src/js/components/info-card-text.js:109)) — fixes the most commonly hit crash on page load (info cards are on the landing page)
2. **Fix Error 2** (4 files, `SphereBufferGeometry` → `SphereGeometry`) — fixes sky rendering and boundary sphere crashes
3. **Fix Error 1** ([`gltf-loader.js`](src/js/third_party/three/gltf-loader.js:25)) — fixes terrain/GLTF model loading
4. **Fix Error 5** ([`draco-loader.js`](src/js/third_party/three/draco-loader.js:319-321)) — forward-compat fix for Draco mesh loading
5. **Fix Error 4 guard** ([`hitbox.js`](src/js/components/hitbox.js:86)) — defensive guard
6. **Cleanup** ([`mesh-line.js`](src/js/third_party/spite/mesh-line.js:37)) — low priority dead code

---

## Test Plan

After applying fixes, verify:

1. Page loads without console errors at https://access-mars.pages.dev/
2. Terrain loads correctly (Murray Buttes, Pahrump Hills locations)
3. Sky gradient/blackout renders correctly
4. Info cards display with correct text
5. Hit detection works on info cards, POI markers, and map markers
6. Fade-to-black transition works correctly