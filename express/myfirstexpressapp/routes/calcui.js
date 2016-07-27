var cal = require("./calculate")
var i = 40;
var j = 10

console.log("\n");
console.log("\ni = 40");
console.log("j = 10");	
console.log("\nadd (i + j)");
console.log(cal.add(i, j));
console.log("\nsub (i - j)");
console.log(cal.sub(i, j));
console.log("\nmul (i * j)");
console.log(cal.mul(i, j));
console.log("\ndiv (i / j)");
console.log(cal.div(i, j));
console.log("\n");

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  } 
  alert('Query Variable ' + variable + ' not found');
}

function parseSecond(val) {
    var result = "Not found",
        tmp = [];
    var items = location.search.substr(1).split("/");
    for (var index = 0; index < items.length; index++)
	{
        tmp = items[index].split("=");
        if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
    }
    return result;
}