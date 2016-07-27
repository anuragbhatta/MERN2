var React = require('react');
var ReactDOM = require('react-dom');

var Sentbox = React.createClass({
    render: function() {
        return (
            <div className = "Sentbox" >
                <Menu />
                <p>This is Sentbox</p>
            </div >
        );
    }
});

module.exports = Sentbox;
