// import fs module
var fs = require('fs');

function readCSVFileAsync(callback){
	var readline = require('readline');
	var fs = require('fs');
	var header =[];
	var jsonData=[];
	var tempData={};
	var isHeader=true;
	//when reading large files- we can not use standard methods for file read and write.
	//we read a chunk of data manipulate and write it back immediately.
	const rl = readline.createInterface({
		input: fs.createReadStream('Indicators.csv')
	});
	
	// Read data line by line
	rl.on('line', function(line) {
		// store each row in the array lineRecords
		var lineRecords = line.trim().split(',');
		for(var i=0; i<lineRecords.length; i++){
			if(isHeader){
				header[i]=lineRecords[i];
			} 
			else{
				tempData[header[i]]=lineRecords[i];
			}
		}
		jsonData.push(tempData);
		console.log.apply(console, header);
		console.log.apply(console, jsonData);
		tempData={};
		isHeader=false;
		//  fs.writeFileSync("data.json",JSON.stringify(jsonData),encoding="utf8");
		
	});
	rl.on('close', function() {
		console.log("jsonData length="+jsonData.length);
		console.log(header);
		console.log(jsonData);
		//createpopulationJSON(jsonData);
		
	});
	
	console.log(header);
	console.log(jsonData);
	
	callback();
}



//
 function createpopulationJSON( jsonArr ) {
	var population = [];
	var noOfRows = jsonArr.length;
	console.log("printing number of rows in jsonArr="+noOfRows);
	
	for (var i = 1; i < noOfRows;i++) {
		//CountryName, ,IndicatorName, ,Year,Value
		// India  Rural population (% of total population)   Urban population (% of total)  
		
		if(jsonArr[0]["CountryName"] != 'India')
		{
			if(jsonArr[i]["IndicatorName"] != 'India  Rural population (% of total population)' || jsonArr[i]["IndicatorName"] != 'Urban population (% of total)')
		{
			population[i] = {
				India  Rural population (% of total population) : jsonArr[i]['Rural population (% of total population)'],
				Urban population (% of total) : parseInt(jsonArr[i]['Urban population (% of total)']),
				year : jsonArr[i][year],
			};
		}
		}
	}
	console.log("population.length=>"+population.length);
	//  console.log("population.length=>"+population.length);
	var newArray = [];
	for (var i = 0; i < population.length; i++) {
		if (population[i] !== undefined && population[i] !== null && population[i] !== "") {
			newArray.push(population[i]);
		}
	}
	console.log("removing null values="+newArray.length); // == 3
	
	var temp = {};
	var obj = null;
	for(var i=0; i < newArray.length; i++) {
		obj=newArray[i];
		
		if(!temp[obj.ageGroup]) {
			temp[obj.ageGroup] = obj;
			} else {
			temp[obj.ageGroup].population += obj.population;
		}
	}
	var result = [];
	for (var prop in temp)
	result.push(temp[prop]);
	console.log("result=>"+JSON.stringify(result));
	//console.log("population="+JSON.stringify(population));
	fs.writeFile("output/population.json", JSON.stringify(result,undefined, 2), function (err) {
		if (err) throw err;
		console.log('population JSON file has been successfully created');
	});
}
