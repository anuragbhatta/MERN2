var fs = require('fs');
var util = require('util');
var stream = require('stream');
var es = require('event-stream');

var lineNr = 0;

var s = fs.createReadStream('Indicators.csv')
    .pipe(es.split())
    .pipe(es.mapSync(function(line){
        s.pause();
        lineNr++;		
        logMemoryUsage(lineNr);
        s.resume();
    })
    .on('error', function(){
        console.log('Error while reading file.');
    })
    .on('end', function(){
        console.log('Read entire file.')
    })
);
