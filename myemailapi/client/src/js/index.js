var React = require('react');
var {render} =require('react-dom');
var {browserHistory, Route, Router,Link, IndexRoute} = require('react-router');
var MailBox= require('./components/MailBox');
var SaveBox=require('./components/SaveBox');

var NavBarComponent= require('./components/NavBarComponent');
var Home= require('./components/Home');
//ReactDOM.render(<MailBox/>,document.getElementById('app'));
//ReactDOM.render(<MailBoxView/>,document.getElementById('app'));

var MainComponent = React.createClass({
  render: function()
  {
    return(
      <div className="MainComponent">
      <NavBarComponent />
      <br/><br/><br/>
      {this.props.children}
      </div>
    );
  }
});

render(
   <Router history = {browserHistory}>
      <Route path = "/" component = {MainComponent}>
         <IndexRoute component = {Home} />
         <Route path= "Home" component = {Home} />
         <Route path = "MailBox" component = {MailBox} />
         <Route path = "SaveBox" component = {SaveBox} />
      </Route>
   </Router>, document.getElementById('app'));
