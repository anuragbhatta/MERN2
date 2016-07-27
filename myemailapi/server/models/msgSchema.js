var mongoose=require('mongoose');
var msgSchema=mongoose.Schema({
 MailFrom:String,
 MailSubject:String,
 MailBody:String,
 MailDate:String,
 MailTime:String
});
module.exports=mongoose.model('msgCollection',msgSchema);
