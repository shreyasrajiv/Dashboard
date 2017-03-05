if (typeof myApp === "undefined") {
	var myApp = {};
}

(function () {
	document.getElementById("appContainer").className += "showLoading";
	window.setTimeout(function () {
		// reomve loading image
		document.getElementById("appContainer").className = "";

		// update data for components
		myApp.Tile.calculateTileValues();
		myApp.config.table.data = myApp.data.inverters;

		// render tiles
		for(var key in myApp.config.tiles){
			myApp.Tile.createTile(myApp.config.tiles[key]);
		}

		// render table
		myApp.Table.createTable(myApp.config.table);
	}, 1000);
}());