// QA harness: runs the real page in headless Chrome (real time), clicks the
// enter button, and reports which intro gates fire and which stall.
// Usage: node scripts/qa-intro-flow.js [--skip-video]
const puppeteer = require('puppeteer-core');

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const URL = 'http://127.0.0.1:8123/';
const skipVideo = process.argv.includes('--skip-video');

(async () => {
    const browser = await puppeteer.launch({
        executablePath: CHROME,
        headless: 'new',
        args: ['--no-first-run', '--use-gl=angle', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required']
    });
    const page = await browser.newPage();
    page.on('console', msg => console.log('[console.' + msg.type() + ']', msg.text().slice(0, 300)));
    page.on('pageerror', err => console.log('[PAGEERROR]', String(err.stack || err).slice(0, 900)));
    page.on('response', res => {
        const u = res.url();
        if (/\.(glb|wasm)(\?|$)/.test(u)) console.log('[net]', res.status(), u.replace(URL, '/'));
    });

    await page.goto(URL, { waitUntil: 'load', timeout: 60000 });
    await page.waitForSelector('#enter-vr-container.ready', { timeout: 30000 });
    console.log('[qa] splash ready, clicking enter button');
    await page.click('.webvr-ui-button');

    const probe = () => {
        const s = document.querySelector('#scene');
        const c = s && s.components && s.components['intro-player'];
        const v = document.getElementById('intro-video-mp4') || document.getElementById('intro-video-webm');
        return {
            states: s ? (s.states || []) : null,
            gates: c ? {
                animLoaded: c.animLoaded, videoComplete: c.videoComplete,
                terrainLoaded: c.terrainLoaded, introComplete: c.introComplete
            } : null,
            video: v ? { t: +v.currentTime.toFixed(1), d: +(v.duration || 0).toFixed(1), paused: v.paused, ended: v.ended } : null,
            hasRover: !!document.querySelector('#rover'),
            mode: (window.Scene && window.Scene.modeType) || 'n/a'
        };
    };

    let endedDispatched = false;
    const t0 = Date.now();
    let last = null;
    while (Date.now() - t0 < 120000) {
        const state = await page.evaluate(probe);
        const key = JSON.stringify(state);
        if (key !== last) { console.log('[qa]', key); last = key; }

        if (state.gates && state.gates.introComplete) {
            console.log('[qa] PASS: intro completed, animation playing');
            break;
        }
        // Once assets are loaded, force the video-ended gate if asked
        if (!endedDispatched && skipVideo && state.gates && state.gates.animLoaded && state.gates.terrainLoaded) {
            console.log('[qa] assets loaded; dispatching synthetic video ended');
            await page.evaluate(() => {
                const v = document.getElementById('intro-video-mp4') || document.getElementById('intro-video-webm');
                if (v) v.dispatchEvent(new Event('ended'));
            });
            endedDispatched = true;
        }
        // If video ended naturally and gates not complete after 20s more, keep watching (stall evidence)
        await new Promise(r => setTimeout(r, 1000));
    }
    if (last && !JSON.parse(last).gates?.introComplete) {
        console.log('[qa] TIMEOUT: intro never completed — see last gate state above');
    }
    await browser.close();
    process.exit(0);
})().catch(err => { console.error('[qa] FATAL', err); process.exit(1); });
