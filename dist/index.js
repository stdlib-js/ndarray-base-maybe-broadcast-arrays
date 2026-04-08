/** @license Apache-2.0 */

'use strict';

/**
* Broadcast ndarrays to a common shape.
*
* @module @stdlib/ndarray-base-maybe-broadcast-arrays
*
* @example
* var getShape = require( '@stdlib/ndarray-shape' );
* var array = require( '@stdlib/ndarray-array' );
* var zeros = require( '@stdlib/ndarray-zeros' );
* var maybeBroadcastArrays = require( '@stdlib/ndarray-base-maybe-broadcast-arrays' );
*
* var x1 = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]
*
* var shx = getShape( x1 );
* // returns [ 2, 2 ]
*
* var y1 = zeros( [ 3, 2, 2 ] );
* // returns <ndarray>[ [ [ 0, 0 ], [ 0, 0 ] ], [ [ 0, 0 ], [ 0, 0 ] ], [ [ 0, 0 ], [ 0, 0 ] ] ]
*
* var shy = getShape( y1 );
* // returns [ 3, 2, 2 ]
*
* var out = maybeBroadcastArrays( [ x1, y1 ] );
* // returns [ <ndarray>, <ndarray> ]
*
* var x2 = out[ 0 ];
* // returns <ndarray>[ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 1, 2 ], [ 3, 4 ] ], [ [ 1, 2 ], [ 3, 4 ] ] ]
*
* var y2 = out[ 1 ];
* // returns <ndarray>[ [ [ 0, 0 ], [ 0, 0 ] ], [ [ 0, 0 ], [ 0, 0 ] ], [ [ 0, 0 ], [ 0, 0 ] ] ]
*
* shx = getShape( x2 );
* // returns [ 3, 2, 2 ]
*
* shy = getShape( y2 );
* // returns [ 3, 2, 2 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
