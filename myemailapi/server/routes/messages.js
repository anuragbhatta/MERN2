var mongoose = require('mongoose');
var express = require('express');
var router = express();
var http = require('http');
var bodyParser = require('body-parser');

var Schema = mongoose.Schema;
var mailboxSchema = new Schema({
	msg_id:String,
	Msg_snippet:String,
	Msg_data:String
});

var MailBox = mongoose.model('MailBox', mailboxSchema);

router.use(bodyParser.json());       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

mongoose.connect('mongodb://localhost/MailDB', function (error) {
	if (error) {
		console.log(error);
	}
});

//code for creating new record
router.post("/mailbox/add", function (req, res) {
	var mailObj = new MailBox({
		msg_id:req.body.msg_id,
		Msg_snippet:req.body.Msg_snippet,
		Msg_data:req.body.Msg_data
	});
	console.log(mailObj);
	mailObj.save(function (err, mailObj) {
		if (err) return console.error(err);
		console.dir(mailObj);
	});
	res.send(mailObj);
});

//code to fetch inbox
router.get("/mailbox/", function (req, res) {
	MailBox.find({}, function (err, doc) {
		if (err) throw err;
		console.log("mailbox/ : -> " + doc);
		res.send(doc);
	});
});

//code for home page
router.get('/', function (req, res) {
	res.send('My own GMail box');
});

module.exports = router;
