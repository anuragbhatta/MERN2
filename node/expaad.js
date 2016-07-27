var express = require('express');
var router = express.Router();
var bodyparser=require('body-parser');
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended:true}));//
var obj=[];
/* GET home page. */
router.get('/', function(req, res) {
 res.send(obj);

});
router.post('/add',function(req,res,next){
 var id=req.body.id;
 var name=req.body.name;
 console.log(req.body);
obj.push(req.body);
 res.end("Sucessfully added");

});
router.put('/update/:id/:name',function(req,res){
var id1=req.params.id;
if(obj[0].id==id1){
 obj[0].name=req.params.name;


}
res.end();
});
router.delete('/delete/:id',function(req,res){
var id1=req.params.id;
obj.splice(obj.indexOf(id1),1);
res.end("Deleted !!");

});
module.exports = router;