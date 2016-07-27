var React = require('react');
var ReactDOM = require('react-dom');

var Mail = React.createClass({
    render: function() {
        return (
            <div className = "Mail" >
                <div className = "col-md-10" >
                    <p>{this.props.allMail.snippet}</p>
                    <button type="submit" value="showmail" className="btn btn-primary btn-lg pull-right" onClick={this.showMail}> Show </button>
                </div>
            </div >
        );
    }
});

module.exports = Mail;
