/*
var array = [
  { "name": "Joe", "age": 17 },
  { "name": "Bob", "age": 17 },
  { "name": "Carl", "age": 35 }
];
array.map(item => item.age).filter((value, index, self) => self.indexOf(value) === index)

*/

var myObject = [
	{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
	{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
	{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
	{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
	{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
	{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}
	];
	
var i;
var j;
var newObject = {};
var job = [];
var temp;
var people = [];

loop1: for (i = 0; i < myObject.length; i++){
    temp = myObject[i].occupation;
    for (j = 0; j < job.length; j++){
        if (job[j] == temp){
            continue loop1;
        }
    }
    job.push(temp);
	//newObject.job[i]: [];
}

for(i = 0; i < myObject.length; i++){
	// sorting in descending order
	myObject.sort(function(a, b){
	return b.age-a.age
	})
	if(myObject[i].occupation == "Programmer")
		console.log(myObject[i]);
}

for(i = 0; i < job.length; i++){
	
	for(j = 0; j < myObject.length; j++){
		if(myObject[j].occupation == job[i]){
			people.push({"name":myObject[j].name, "age":myObject[j].age});
			//newObject[i].push(job[i]);
		}
	}
	newObject[job[i]] = people;
}

//console.log(job);

console.log(newObject);