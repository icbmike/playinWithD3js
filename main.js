//Get the chart
var chart = d3.select(".chart");

var points = [
{x: 95, y: 13},
{x: 73, y: 63},
{x: 45, y: 13},
{x: 45, y: 63},
{x: 15, y: 23},
];


//Set it's width
chart.attr("width", 800);
chart.attr("height", 450);

//Draw some circles
chart.selectAll("circle").data(points).enter().append("circle")
		.attr("r", 20)
		.attr("cy", function(p){return p.y * 5;})
		.attr("cx", function(p){return p.x * 5;});


//Draw lines between the circles
point_pairs = [];
for (var i = 0; i < points.length; i++) {
	for (var j = 0; j < points.length; j++) {
		if(points[i] !== points[j])
			point_pairs.push([points[i], points[j]])
	};
};

chart.selectAll("line").data(point_pairs).enter().append("line")
	.attr("x1", function(pp){return pp[0].x * 5;})
	.attr("y1", function(pp){return pp[0].y * 5;})
	.attr("x2", function(pp){return pp[1].x * 5;})
	.attr("y2", function(pp){return pp[1].y * 5;});