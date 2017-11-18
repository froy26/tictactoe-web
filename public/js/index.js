console.log("OK");

var tiles = document.getElementsByClassName("tile");


window.addEventListener('load', function(){
	initTiles();
});

function takeTile( tile ) {
	tile.classList.add("active","x");
}

function initTiles() {
	for (var i = 0; i<tiles.length;i++) {
		var tile = tiles[i];

		tile.addEventListener('click', function(event) {
			var tileIsAlreadyTaken = (
				!event.target.classList.contains("x") &&
				!event.target.classList.contains("o")
			);
			if ( !tileIsAlreadyTaken ) {
				takeTile( event.target );
			}
		});
	}
}