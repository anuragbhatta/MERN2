var React = require('react');
var ReactDOM = require('react-dom');
var Mail = require('./mail');
var Menu = require('./menu');

var Inbox = React.createClass({
    render: function() {
        //console.log("this.props.allMovieData : "+this.props.allMovieData);
        var allMailDataMap = this.props.allMailData.map(function(mail) {
            return(
                <Mail allMails={mail} key={mail.id} ></Mail>
            );
        }.bind(this));
        return (
            <div className = "Inbox" >
                <Menu />
                {allMailDataMap}
            </div >
        );
    }
});

module.exports = Inbox;
