var React = require('react');

var OpenMail = React.createClass ({
  getInitialState: function(){
  return(
        {
    msg_id:this.props.MailAll.msg_id,
    Msg_snippet:this.props.MailAll.Msg_snippet,
    Msg_data:this.props.MailAll.Msg_data,
  });
    },
    componentDidMount: function(){
      mdata=JSON.stringify(this.state.MailAll);
      // console.log("will "+mdata);
      var html = atob(this.props.MailAll.Msg_data.replace(/-/g, '+').replace(/_/g, '/'));
   this.appendPre(html);
    },
    appendPre: function(message)
  {
   document.getElementById('contents').innerHTML= message;
  },
    handleInsert:function(e){
        e.preventDefault();
  console.log("MailAll "+this.state.mid);
        $.ajax({
          url:"http://localhost:8080/msg/mailbox/add",
          type:"POST",
          data:this.state,
          datatype:"json",
          success:function(data)
          {
          console.log(data);
          }.bind(this),
          error:function(err){
            console.error(err.toString());
          }.bind(this)
        });
        console.log("Inserted");
        alert("mail inserted to database")
      },
 render: function()
 {
 return(
   <div className="modal fade" id="modal-container-808820" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
     <div className="modal-dialog modal-lg">
       <div className="modal-content">
         <div className="modal-header">

           <button type="button" className="close" onClick={this.props.handleHideModal} data-dismiss="modal" aria-hidden="true">
             x
           </button>
           Mail Details
         </div>
         <div className="modal-body">
         <div className="row" id="contents">
          {this.props.MailAll.Msg_data}
         </div>
         <div className="modal-footer">
           <button type="button" onClick={this.props.handleHideModal} className="btn btn-default"  data-dismiss="modal">
             Close
           </button>
           <button type="button" onClick={this.handleInsert}  className="btn btn-primary">
             Save
           </button>
         </div>
       </div>
     </div>
   </div>
</div>
 );}
}
);
module.exports=OpenMail;
