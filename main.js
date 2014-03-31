//Get the chart
var chart = d3.select(".chart");

var nums = [1, 2, 3, 4, 9];

//Set it's width
chart.attr("width", 800);
chart.attr("height", 450);


chart.selectAll("circle").data(nums).enter().append("circle")
		.attr("r", 20)
		.attr("cy", 100)
		.attr("cx", function(d){return d* 50});