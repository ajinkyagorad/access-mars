/**
 * jpeg-worker
 *
 * Web worker for decoding JPEG data into raw RGB pixels.
 * Used for loading ProgressiveTextures (high-resolution terrain tiles)
 * off the render thread.
 *
 * The original 2017 version decoded via a bundled asm.js JPEG library
 * (djpeg.js); it is replaced here with createImageBitmap, which is
 * available in workers on all modern browsers (including the Meta
 * Quest browser), faster, and dependency-free.
 *
 * Input message:  { data: ArrayBuffer (JPEG bytes), size: int }
 * Output message: Uint8Array of size*size*3 RGB pixels
 *                 (or { error: string } on failure)
 */

onmessage = function( event ) {

	const jpegBytes = event.data.data;
	const size = event.data.size;

	const blob = new Blob( [ jpegBytes ], { type: 'image/jpeg' } );

	createImageBitmap( blob ).then( bitmap => {
		const canvas = new OffscreenCanvas( size, size );
		const ctx = canvas.getContext( '2d' );
		ctx.drawImage( bitmap, 0, 0, size, size );
		bitmap.close();

		const rgba = ctx.getImageData( 0, 0, size, size ).data;
		const rgb = new Uint8Array( size * size * 3 );

		for ( let i = 0, j = 0; i < rgb.length; i += 3, j += 4 ) {
			rgb[ i ] = rgba[ j ];
			rgb[ i + 1 ] = rgba[ j + 1 ];
			rgb[ i + 2 ] = rgba[ j + 2 ];
		}

		postMessage( rgb, [ rgb.buffer ] );

	}).catch( err => {
		postMessage( { error: String( err ) } );
	});
};
