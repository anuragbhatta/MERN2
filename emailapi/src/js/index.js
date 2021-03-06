var React = require('react');
var {render} = require('react-dom');
var {browserHistory, Route, Link, Router, IndexRoute} = require('react-router');

var Home = require('./components/home');
var Inbox = require('./components/inbox');
var Sentbox = require('./components/sentbox');
var Menu = require('./components/menu');
var NavbarComponent = require('./components/navbar');


var MainComponent = React.createClass({
	render: function(){
		return(
			<div>
                <NavbarComponent />
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
            <Route path="home" component={Home} />
            <Route path="inbox" component={Inbox} />
            <Route path="sentbox" component={Sentbox} />
        </Route>
    </Router>,
    document.getElementById('app')
);
