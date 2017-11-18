console.log("OK");

var tiles = document.getElementsByClassName("tile");


window.addEventListener('load', function(){
	initTiles();
});

function takeTile( tile ) {
	tile.classList.add("active","x");
}

function onTileClick(event) {
	var tile = event.target;
	var tileIsAlreadyTaken = (
		tile.classList.contains("x") ||
		tile.classList.contains("o")
	);
	if ( !tileIsAlreadyTaken ) {
		takeTile( tile );
	}
}

function initTiles() {
	for (var i = 0; i<tiles.length;i++) {
		var tile = tiles[i];

		tile.addEventListener('click', onTileClick);
	}
}