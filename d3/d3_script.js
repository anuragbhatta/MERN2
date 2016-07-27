
function urban_rural_pop(urbanPoints, ruralPoints) {
	var width = 1000,
	height = 500,
	padding = 100;
	var svgContainer = d3.select("body").append("svg")
	.attr("width", width)
	.attr("height", height);
	var xAxisScale = d3.scale.linear()
	.domain([1960, 2015])
	.range([0, 800]);
	var xAxis = d3.svg.axis().orient("bottom").scale(xAxisScale);
	var xAxisGroup = svgContainer.append("g").attr("transform", "translate(100," + (height - padding +10) + ")").call(xAxis);
	var yAxisScale = d3.scale.linear()
	.domain([100, 0])
	.range([0, 400]);
	var yAxis = d3.svg.axis().orient("left").scale(yAxisScale);
	var yAxisGroup = svgContainer.append("g").attr("transform", "translate("+padding+",10)").call(yAxis);
	var div = d3.select("body")
	.append("div")
	.style("opacity", 0);
	
	svgContainer.append("text")
	.attr("class", "yaxis_label")
	.attr("text-anchor", "middle")
	.attr("transform", "translate("+ (padding/2) +","+(height/2)+")rotate(-90)")
	.text("Population (%)");
	
	svgContainer.append("text")
	.attr("class", "xaxis_label")
	.attr("text-anchor", "middle")
	.attr("transform", "translate("+ (width/2) +","+(height-40)+")")
	.text("Year");
	
	svgContainer.append("text")
	.attr("text-anchor", "middle")
	.attr("transform", "translate("+ (width/2) +","+(height-20)+")")
	.text("Urban-magenta & Rural-green");
	
	var urbanLineFunction = d3.svg.line()
	.x(function(d) { return 100+(d.Year-1960)*(800/55); })
	.y(function(d) { return (400-d.Value*4)+10; })
	.interpolate("linear");
	var urbanLineGraph = svgContainer.append("path")
	.attr("d", urbanLineFunction(urbanPoints))
	.attr("stroke", "magenta")
	.attr("stroke-width", 2)
	.attr("fill", "none");
	
	var ruralLineFunction = d3.svg.line()
	.x(function(d) { return 100+(d.Year-1960)*(800/55); })
	.y(function(d) { return (400-d.Value*4)+10; })
	.interpolate("linear");
	
	var ruralLineGraph = svgContainer.append("path")
	.attr("d", ruralLineFunction(ruralPoints))
	.attr("stroke", "green")
	.attr("stroke-width", 2)
	.attr("fill", "none");
	
	svgContainer.selectAll("circle")
	.data(jsonPoints)
	.enter().append("circle")
	.attr("cx", function(d) { return 100+(d.Year-1960)*(800/55); })
	.attr("cy", function(d) { return (400-d.Value*4)+10; })
	.attr("r", 3)
	.style("fill", "blue");
}

function asian_urban_rural(rects) {
	var width = 1500,
	height = 700,
	padding = 250;
    var svgContainer = d3.select("body").append("svg")
	.attr("width", width)
	.attr("height", height);
    var xAxisScale = d3.scale.linear()
	.domain([1960, 2015])
	.range([0, 900]);
    var xAxis = d3.svg.axis().orient("bottom").scale(xAxisScale);
    var xAxisGroup = svgContainer.append("g").attr("transform", "translate(250," + (height - padding +10 + 150) + ")").call(xAxis);
    var yAxisScale = d3.scale.linear()
	.domain([4000000000, 0])
	.range([0, 600]);
    var yAxis = d3.svg.axis().orient("left").scale(yAxisScale);
    var yAxisGroup = svgContainer.append("g").attr("transform", "translate("+padding+",10)").call(yAxis);
    svgContainer.append("text")
	.attr("class", "yaxis_label")
	.attr("text-anchor", "middle")
	.attr("transform", "translate("+ (padding/3) +","+(height/3)+")rotate(-90)")
	.text("Population");
	
    svgContainer.append("text")
	.attr("class", "xaxis_label")
	.attr("text-anchor", "middle")
	.attr("transform", "translate("+ (width/3) +","+(height-40)+")")
	.text("Year");
	
    svgContainer.append("text")
	.attr("text-anchor", "middle")
	.attr("transform", "translate("+ (width/2) +","+(height-20)+")")
	.text("Asian countries Urban_Rural population");
	
    svgContainer.selectAll("rect")
	.data(rects)
	.enter().append("rect")
	.attr("x", function(d) { return 250+((parseInt(d.Year)-1960)*(900/55)); })
	.attr("width", (900/55))
	.attr("y", function(d) { return 600-((d.Total/4000000000)*600)+10; })
	.attr("height", function(d) { return (parseInt(d.Value)/4000000000)*600; })
	.attr("stroke", "#333776")
	.attr("stroke-width", 1)
	.style("fill", function(d) { return d.Color; })
	;
}
