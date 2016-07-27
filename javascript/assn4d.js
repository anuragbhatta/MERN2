//this is node global objects used for interacting with the file system
//One need such objects from platforms to work with OS file system
​
var fs = require('fs'),
    readline = require('readline'),
​
var inputCSVFilePath = "Indicators.csv",
    outputFilePath1 = "file1.json",
    outputFilePath = "file2.json";
​
//When reading large files - we cannot use standard methods for file read and write. We read a chunk of data - manipulate and write it back immediately.

var csvFileRead = fs.createReadStream(inputCSVFilePath),
      lineByline = readline.createInterface({
        input : reader
    });
​
var MAP_COUNTRIES_ASIA = ["Afghanistan", "Bahrain", "Bangladesh", "Bhutan", "Myanmar", "Cambodia", "China", "India", "Indonesia", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Nepal",
"Oman", "Pakistan", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "Sri Lanka", "Syrian Arab Republic", "Tajikistan", "Thailand", "Timor-Leste", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"];
​
var regexp =  //<SET APPROPRIATE REGULAR EXPRESSION FOR READING AND SPLITTING RECORDS>
​
csvFileRead.on('open', function(){
    
    //<INITIALZE YOUR OBJECTS / ARRAYS>
    
 });
​
​
lineByline.on('line',function(line){
    var rows = line.split('/r/n');
    
    //<FETCH HEADERS FROM THE FIRST LINE>

    //<USE REGEXP INCASE RECORDS HAVE EXTRA QUOTES OR COMMAS>

    //<FILTER AND CREATE NEW OBJECTS FOR REQUIRED RECORDS / AGGREGATE ETC.>

});
​
lineByline.on('close',function () {
    //<HANDLE LARGE FILE>
);
​
csvFileRead.on('end', function(){
    //<WRITE JSON FILES>
});