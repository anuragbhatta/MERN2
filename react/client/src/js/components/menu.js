var React = require('react');
var {Link} = require('react-router');

var Menu = React.createClass({
    render: function() {
        return (
            <div className = "Menu" >
                <div className="navbar navbar-fixed-top">
                    <div className="container">
                        <button className="navbar-toggle" data-target=".navbar-responsive-collapse" data-toggle="collapse" type="button">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="nav-collapse collapse navbar-responsive-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="/home">Home</Link></li>
                                <li className=""><Link to="/add">Add Movies</Link></li>
                                /*<li className="active">Home</li>
                                <li className="">Add Movies</li>*/
                            </ul>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
});

module.exports = Menu;
