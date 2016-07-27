//using callback method code :
 
var i=0;

 var dumb=function(cb){

while(i<99){
    console.log(i);
i++;
}
cb(i);
}

setImmediate(dumb, function(j) {
   console.log(" i was called...!");
   console.log("value was: ", j);
});
console.log("Started");