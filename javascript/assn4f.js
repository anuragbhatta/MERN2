var fs = require('fs'), readline = require('readline'), stream = require('stream');

var ASIAN_COUNTRIES = ["Afghanistan", "Bahrain", "Bangladesh", "Bhutan", "Myanmar", "Cambodia", "China", "India", "Indonesia", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Nepal",
"Oman", "Pakistan", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "Sri Lanka", "Syrian Arab Republic", "Tajikistan", "Thailand", "Timor-Leste", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"];

var instream = fs.ReadStream('Indicators.csv');
var outstream1 = fs.WriteStream('output1.json');
outstream1.readable = true;
outstream1.writable = true;

var outstream2 = fs.WriteStream('output2.json');
outstream2.readable = true;
outstream2.writable = true;
var headers = [];
var count1 = 0, count2 = 0;
var countryIndex, indicatorCodeIndex;

var rl = readline.createInterface({
	input: instream,
	terminal: false
});

rl.on('line', function(line) {
	if(count1==0) {
		headers=line.split(",");
		//console.log(headers);
		countryIndex = headers.indexOf("CountryName");
		indicatorCodeIndex = headers.indexOf("IndicatorCode");
		headers.push("Color");
		outstream1.write("[");
		outstream2.write("[");
		count1++;
		count2++;
	}
	else 
	{
		var currentline = line.replace('"Population,','"Population').replace('"Population ,','"Population').split(",");
		
		if(currentline[countryIndex]==="India" && (currentline[indicatorCodeIndex]==="SP.RUR.TOTL.ZS" || currentline[indicatorCodeIndex]==="SP.URB.TOTL.IN.ZS")) 
		{
			count1 = writeToFile(currentline,outstream1,count1);
			//console.log(count1)
		}  
		else if(currentline[indicatorCodeIndex]==="SP.RUR.TOTL" || currentline[indicatorCodeIndex]==="SP.URB.TOTL") 
		{
			var condition = false;
			for(var i=0;i<ASIAN_COUNTRIES.length;i++) 
			{
				if(currentline[countryIndex]===ASIAN_COUNTRIES[i])
				{
					condition = true;
					break;
				}
			}
			if(condition) 
			{
				count2 = writeToFile(currentline,outstream2,count2);
				//console.log(count2);
			}
		}
	}
	
	}).on('close', () => {
	//console.log(count1+" "+count2);
	//console.log(ASIAN_COUNTRIES.length);
	outstream1.write("]");
	outstream2.write("]");
});

function writeToFile(currentline,outstream,count) {
	var obj = {};
	for(var i=0;i<currentline.length;i++){
		obj[headers[i]] = currentline[i];
	}
	
	if(count==1) {
		outstream.write(JSON.stringify(obj));
		} 
	else {
		outstream.write(","+JSON.stringify(obj));
	}
	
	count++;
	return count;
}
