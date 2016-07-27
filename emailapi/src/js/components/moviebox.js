var React  = require('react');
var ReactDOM  = require('react-dom');
var Menu = require('./menu');
var MovieList = require('./movielist');
var Moviesearch = require('./moviesearch');

var Moviebox = React.createClass({
    getInitialState:function(){
        return{alldata:[]};
    },
    handleSubmitTitleData:function(movie){
        console.log(movie.Title);
        $.ajax({
            url:"http://www.omdbapi.com/?s="+movie.Title,
            type: "GET",
            datatype: "JSON",
            success:function(data){
                //var temp = data;
                this.setState({alldata:data.Search})
                console.log(data.Search);
            }.bind(this),
            error:function(err){
                console.log(err);
            }.bind(this)
        });
        console.log("Inside handleSubmitTitleData");
    },
  render: function() {
    return (
      <div className="Moviebox">
        <Menu />
        <Moviesearch handleSubmitTitle={this.handleSubmitTitleData}/>
        <MovieList allMovieData={this.state.alldata} />
      </div>
    );
  }
});

module.exports = Moviebox;
