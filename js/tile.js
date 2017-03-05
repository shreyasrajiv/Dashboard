if (typeof myApp === "undefined") {
	var myApp = {};
}

myApp.Tile = {
	createTile: function (config) {

		var oTileContainer = document.createElement('div');
		oTileContainer.className += "col-sm-3";

		var oTile = document.createElement('div');
		oTile.className += "tile " + config.class;

		var oTileHeader = document.createElement('div');
		oTileHeader.className += "tileHeader";
		oTileHeader.innerText = config.title;

		var oTileValue = document.createElement('div');
		oTileValue.className += "tileValue";
		oTileValue.innerText = config.data;

		oTile.appendChild(oTileHeader);		
		oTile.appendChild(oTileValue);
		oTileContainer.appendChild(oTile);
		document.getElementById(config.container).appendChild(oTileContainer);
	},
	calculateTileValues: function () {
		var connected = 0,
			disconnected = 0,
			maxYield = 0,
			minYield = Number.MAX_SAFE_INTEGER;

		for(var i = 0; i < myApp.data.inverters.length; i++) {
			if (myApp.data.inverters[i].connected === "connected") {
				connected++;
			}

			if (myApp.data.inverters[i].connected === "disconnected") {
				disconnected++;
			}		

			if (myApp.data.inverters[i].total_yield > maxYield) {
				maxYield = myApp.data.inverters[i].total_yield;
			}

			if (myApp.data.inverters[i].total_yield < minYield) {
				minYield = myApp.data.inverters[i].total_yield;
			}							
		}

		myApp.config.tiles.connected.data = connected;
		myApp.config.tiles.disconnected.data = disconnected;
		myApp.config.tiles.maxYield.data = maxYield.toLocaleString();
		myApp.config.tiles.minYield.data = minYield.toLocaleString();						
	}
};