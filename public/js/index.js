console.log("OK");

var tiles = document.getElementsByClassName("tile");


window.addEventListener('load', function(){
	for(var i = 0; i<tiles.length;i++)
	{
		var tile = tiles[i];
		console.log(i);

		tile.addEventListener('click', function(event){
			if((!event.target.classList.contains("x") && (!event.target.classList.contains("o"))))
			{
				event.target.classList.add("active","x");
			}
		});
	}
});