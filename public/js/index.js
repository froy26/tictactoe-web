var tiles = document.getElementsByClassName( "tile" );
var solutions = [
	[ //Solution for tile 0.
		[ 1, 2 ], //Horizontal
		[ 4, 8 ], //Diagonal
		[ 3, 6 ]  //Vertical
	],
	[ //Solution for tile 1.
		[ 0, 2 ], //Horizontal
		[ 4, 7 ]  //Vertical
	],
	[ //Solution for tile 2.
		[ 0, 1 ], //Horizontal
		[ 4, 6 ], //Diagonal
		[ 5, 8 ]  //Vertical
	],
	[ //Solution for tile 3.
		[ 4, 5 ], //Horizontal
		[ 0, 6 ]  //Vertical
	],
	[ //Solution for tile 4.
		[ 3, 5 ], //Horizontal
		[ 2, 6 ], //Diagonal
		[ 0, 8 ], //Diagonal
		[ 1, 7 ]  //Vertical
	],
	[ //Solution for tile 5.
		[ 4, 3 ], //Horizontal
		[ 2, 8 ]  //Vertical
	],
	[ //Solution for tile 6.
		[ 7, 8 ], //Horizontal
		[ 2, 4 ], //Diagonal
		[ 0, 3 ]  //Vertical
	],
	[ //Solution for tile 7.
		[ 6, 8 ], //Horizontal
		[ 1, 4 ]  //Vertical
	],
	[ //Solution for tile 8.
		[ 6, 7 ], //Horizontal
		[ 0, 4 ], //Diagonal
		[ 2, 5 ]  //Vertical
	]
];

var isXTurn = true;

function initGame() {
	initTiles();
	isXTurn = true;
}

function initTiles() {
	for ( var i = 0; i < tiles.length; i++ ) {
		var tile = tiles[ i ];

		tile.addEventListener( "click", onTileClick );
		tile.classList.remove( "active", "x", "o" );
	}
}

function takeTile( tile ) {
	if ( isXTurn ) {
		tile.classList.add( "active", "x" );
	} else {
		tile.classList.add( "active", "o" );
	}

	isXTurn = !isXTurn;
}

function onTileClick( event ) {
	var tile = event.target;

	takeTile( tile );

	tile.removeEventListener( "click", onTileClick );
}

window.addEventListener( "load", function() {
	initTiles();
} );
