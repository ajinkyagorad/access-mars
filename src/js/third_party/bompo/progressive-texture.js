// Copyright 2017 Google Inc.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.


/**
 * ProgressiveTexture
 *
 * Reimplementation of the bompo ProgressiveTexture used by the terrain
 * component for high-resolution terrain tiles. The JPEG is fetched and
 * decoded off the render thread (by the JPEG worker, which now uses
 * createImageBitmap), and the decoded pixels are drawn onto a
 * canvas-backed THREE.Texture.
 *
 * NOTE: this intentionally does NOT use `class X extends THREE.Texture`
 * or `THREE.Texture.call( this )`: three.js r184 classes are native ES6
 * classes and cannot be invoked without `new` (and Babel-transpiled
 * subclasses of native classes break). Instead, a real THREE.Texture
 * instance is created and the ProgressiveTexture API is mixed onto it.
 * Calling this with `new` still works: a constructor that returns an
 * object yields that object.
 */

function ProgressiveTexture( size ) {

	const canvas = document.createElement( 'canvas' );
	canvas.width = size;
	canvas.height = size;

	const texture = new THREE.Texture( canvas );
	const context = canvas.getContext( '2d' );
	const displayCompleteCallbacks = [];

	texture.isProgressiveTexture = true;
	texture.size = size;
	texture.displayed = false;
	texture.url = null;

	// Registers a callback fired once the decoded image is displayed.
	texture.onDisplayComplete = function( callback ) {
		if ( texture.displayed ) { callback(); return; }
		displayCompleteCallbacks.push( callback );
	};

	// Fetches the JPEG bytes and hands them to the worker for decoding.
	texture.loadWithWorker = function( worker ) {
		const xhr = new XMLHttpRequest();
		xhr.open( 'GET', texture.url, true );
		xhr.responseType = 'arraybuffer';
		xhr.onload = function() {
			if ( xhr.status === 200 || xhr.status === 0 ) {
				worker.postMessage( { data: xhr.response, size: size }, [ xhr.response ] );
			} else {
				console.warn( 'ProgressiveTexture: fetch failed', xhr.status, texture.url );
				finish();
			}
		};
		xhr.onerror = function() {
			console.warn( 'ProgressiveTexture: fetch error', texture.url );
			finish();
		};
		xhr.send();
	};

	// Receives the decoded RGB pixels from the worker and uploads them.
	texture.onWorkerMessage = function( event ) {
		if ( !event.data || event.data.error ) {
			console.warn( 'ProgressiveTexture: decode failed', texture.url, event.data && event.data.error );
			finish();
			return;
		}

		const rgb = event.data; // Uint8Array, size * size * 3

		try {
			const imageData = context.createImageData( size, size );
			const out = imageData.data;
			for ( let i = 0, j = 0; i < rgb.length && j + 3 < out.length; i += 3, j += 4 ) {
				out[ j ] = rgb[ i ];
				out[ j + 1 ] = rgb[ i + 1 ];
				out[ j + 2 ] = rgb[ i + 2 ];
				out[ j + 3 ] = 255;
			}
			context.putImageData( imageData, 0, 0 );
			texture.needsUpdate = true;
		} catch ( err ) {
			console.warn( 'ProgressiveTexture: pixel upload failed', err );
		}

		finish();
	};

	function finish() {
		texture.displayed = true;
		while ( displayCompleteCallbacks.length ) {
			const callback = displayCompleteCallbacks.shift();
			try { callback(); } catch ( err ) { console.error( err ); }
		}
	}

	return texture;
}

// Attach to the global THREE namespace (matches the original bompo API
// surface that the terrain component was written against).
THREE.ProgressiveTexture = ProgressiveTexture;
