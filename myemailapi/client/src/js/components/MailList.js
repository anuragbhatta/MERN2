var React=require('react');
var ReactDOM=require('react-dom');
var Mail=require('./Mail');

var MailList=React.createClass(
  {
    render:function()
    {
      console.log(this.props.data1);
    var Mails = this.props.data1.map(function(mail) {
      return (
        <Mail MailAll={mail} key={mail.msg_id}></Mail>
      );
    }.bind(this));
    return (
      <div className="MailList">
          {Mails}
      </div>
    );
  }
 });

module.exports=MailList;
