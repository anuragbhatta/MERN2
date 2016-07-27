var React = require('react');
var ReactDOM = require('react-dom');
var Movie = require('./movie');

var MovieList = React.createClass({
    render: function() {
        //console.log("this.props.allMovieData : "+this.props.allMovieData);
        var allMovieDataMap = this.props.allMovieData.map(function(movie) {
            return(
                <Movie allMovies={movie} key={movie.imdbID} ></Movie>
            );
        }.bind(this));
        return (
            <div className = "MovieList" >
                {allMovieDataMap}
            </div >
        );
    }
});

module.exports = MovieList;
