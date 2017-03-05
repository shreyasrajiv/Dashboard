if (typeof myApp === "undefined") {
	var myApp = {};
}

myApp.Table = {
	createTable: function (config) {

		var table,
			title,
			thead,
			tbody,
			th,
			tr,
			td,
			text,
			colName,
			i,
			j;

		title = document.createElement('div');
		table = document.createElement('table');
		thead = document.createElement('thead');
		tbody = document.createElement('tbody');
		tr = document.createElement('tr');	

		table.className += "table";

		// creating table headers
		for (i = 0; i < config.columns.length; i++) {
			th = document.createElement('th');
			text = document.createTextNode(config.columnNames[i]);

			th.appendChild(text);
			tr.appendChild(th);
		}
		thead.appendChild(tr);
		table.appendChild(thead);

		// creating table body
		for (i = 0; i < config.data.length; i++){
		    tr = document.createElement('tr');

		    for (j = 0; j < config.columns.length; j++){
		    	td = document.createElement('td');
		    	colName = config.columns[j];

		    	switch (j) {
		    		// to show connected status on first cell		    		
		    		case 0:
			    		// check whether device is connected or not		    		
					    if (config.data[i].connected === "connected") {
					    	td.className += "connected";
					    } else if (config.data[i].connected === "disconnected"){
					    	td.className += "disconnected";
					    }   	
					    break;

					case 1:
						break;	    

					// for comma formmating of number
					case 2:
						config.data[i][colName] = config.data[i][colName].toLocaleString();
						break;	 

					// show last error time
					case 3:
						config.data[i][colName] = (new Date(config.data[i][colName][0].timestamp)).toLocaleString();
						break;														
		    	}

		    	text = document.createTextNode(config.data[i][colName]);
		    	td.appendChild(text);
		    	tr.appendChild(td);
		    }

		    tbody.appendChild(tr);
		}

		table.appendChild(tbody);
		title.innerText = config.header;
		title.className += "title";

		document.getElementById(config.container).appendChild(title);
		document.getElementById(config.container).appendChild(table);		
	}
};