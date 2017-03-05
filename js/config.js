if (typeof myApp === "undefined") {
	var myApp = {};
}

myApp.config = {
	tiles: {
		connected: {
			container: "appContainer",
			class: "green",
			title: "Connected devices",
			data: ""
		},
		disconnected: {
			container: "appContainer",
			class: "red",
			title: "Disconnected devices",
			data: ""
		},
		maxYield: {
			container: "appContainer",
			class: "purple",
			title: "Maximum yield",
			data: ""
		},
		minYield: {
			container: "appContainer",
			class: "grey",
			title: "Minimum yield",
			data: ""
		}
	},
	table: {
		header: "Detailed device status",
		container: "appContainer",
		columns: ["name", "connected", "total_yield", "last_three_errors"],
		columnNames: ["Name", "Status", "Total yield", "Last error"],
		data: []
	}
};