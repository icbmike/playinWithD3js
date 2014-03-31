

function hexagonCoordinates(centreX, centreY, radius, isHorizontal){
	isHorizontal = typeof isHorizontal !== 'undefined' ? isHorizontal : true; //Defaults to true
	var points = [];

	for (var i = 0; i < 6; i++) {
		var x = centreX + radius * Math.cos(i * (Math.PI * 2 / 6) + (isHorizontal ? 0 : Math.PI / 2));
		var y = centreY + radius * Math.sin(i * (Math.PI * 2 / 6) + (isHorizontal ? 0 : Math.PI / 2));
		points.push({x : x, y: y});
	}
	return points;
}

//Get the chart
var chart = d3.select(".chart");

function generateHexGrid(rows, columns, xStart, yStart){
	var hexes = [];
	
	for (var k = 0; k < rows; k++) {

		for (var i = 0; i < columns; i++) {
			
			var x = xStart + (40 * Math.cos(Math.PI *2 / 6) + 40) * i;
			var y = yStart + (40 * Math.sin(Math.PI *2 / 6)) * 2 * k + ((i % 2 === 0) ? 0 : (40 * Math.sin(Math.PI *2 / 6)));
			hexes.push(hexagonCoordinates(x, y, 40));
		}
	}
	return hexes;
}

chart.selectAll("polygon").data(generateHexGrid(50, 100, 0, 0)).enter().append("polygon")
	.attr("points", function(d){
		var ps = "";
		for (var i = 0; i < 6; i++) {
			ps += d[i].x + "," + d[i].y + " ";
		}
		return ps;
	});

