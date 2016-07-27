var React = require('react');
var {render} = require('react-dom');
var {browserHistory, Route, Link, Router, IndexRoute} = require('react-router');
var Moviebox = require('./components/moviebox');
var Menu = require('./components/menu');
var Home = require('./components/home');
var AboutUs = require('./components/aboutus');
//var Home = require('./components/home');

var MainComponent = React.createClass({
	render: function(){
		return(
			<div className="MainComponent">
				<Menu />
				<br/><br/><br/>
				{this.props.children}
			</div>
		)
	}
});

render(
     <Router history={browserHistory}>
        <Route path="/" component={MainComponent}>
            <IndexRoute component={Home} />
            <Route path="aboutus" component={AboutUs} />
            <Route path="add" component={Moviebox} />
        </Route>
    </Router>,
    document.getElementById('app')
);
