/** @license Apache-2.0 */

'use strict';

/**
* Broadcast ndarrays to a common shape.
*
* @module @stdlib/ndarray-base-maybe-broadcast-arrays
*
* @example
* var array = require( '@stdlib/ndarray-array' );
* var zeros = require( '@stdlib/ndarray-zeros' );
* var maybeBroadcastArrays = require( '@stdlib/ndarray-base-maybe-broadcast-arrays' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>
*
* var shx = x.shape;
* // returns [ 2, 2 ]
*
* var y1 = zeros( [ 3, 2, 2 ] );
* // returns <ndarray>
*
* var shy = y1.shape;
* // returns [ 3, 2, 2 ]
*
* var out = maybeBroadcastArrays( [ x1, y1 ] );
* // returns [ <ndarray>, <ndarray> ]
*
* var x2 = out[ 0 ];
* // returns <ndarray>
*
* var y2 = out[ 1 ];
* // returns <ndarray>
*
* shx = x2.shape;
* // returns [ 3, 2, 2 ]
*
* shy = y2.shape;
* // returns [ 3, 2, 2 ]
*
* var v = x2.get( 0, 0, 0 );
* // returns 1
*
* v = x2.get( 0, 0, 1 );
* // returns 2
*
* v = x2.get( 1, 0, 0 );
* // returns 1
*
* v = x2.get( 1, 1, 0 );
* // returns 3
*
* v = x2.get( 2, 0, 0 );
* // returns 1
*
* v = x2.get( 2, 1, 1 );
* // returns 4
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
