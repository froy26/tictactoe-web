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

function endTurn( tile ) {
	var winner = checkGameCompletion( tile );
	if ( [ "x", "o", null ].includes( winner ) ) {

		// End the game!
		if ( winner === null ) {
			console.log( "It's a draw!" );
		} else {
			console.log( winner + " WON!" );
		}
		return;
	}

	isXTurn = !isXTurn;
}

function tileIndexIsNotOur( tileIndexToValidate ) {
	var valueToCheck = isXTurn ? "x" : "o";
	var tileToCheck = tiles[ tileIndexToValidate ];
	var tileIsOur = tileToCheck.classList.contains( valueToCheck );
	return !tileIsOur;
}

function checkGameCompletion( tile ) {

	var valueOfCurrentTurn = isXTurn ? "x" : "o";

	// Find index of given tile
	var indexOftile = -1;
	for ( var i = 0; i < tiles.length; i++ ) {
		if ( tiles[ i ] === tile ) {
			indexOftile = i;
			break;
		}
	}

	// If tile index not found, ERROR
	if ( indexOftile === -1 ) {

		// ERROR
		return undefined;
	}

	// Check if game is won
	var solutionFound = false;
	var solutionsForTile = solutions[ indexOftile ];
	for ( var solutionIndex in solutionsForTile ) {
		var solution = solutionsForTile[ solutionIndex ];
		solutionFound = !solution.some( tileIndexIsNotOur );
		if ( solutionFound ) {
			return valueOfCurrentTurn;
		}
	}

	// Check if game is null
	var isDraw = !Array.from( tiles ).some( function( _tile ) {
		return !_tile.classList.contains( "active" );
	} );

	if ( isDraw ) {
		return null;
	}

	return undefined;
}

function takeTile( tile ) {
	if ( isXTurn ) {
		tile.classList.add( "active", "x" );
	} else {
		tile.classList.add( "active", "o" );
	}
}

function onTileClick( event ) {
	var tile = event.target;

	takeTile( tile );

	tile.removeEventListener( "click", onTileClick );

	endTurn( tile );
}

window.addEventListener( "load", function() {
	initTiles();
} );
