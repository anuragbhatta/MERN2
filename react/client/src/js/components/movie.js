var React = require('react');
var ReactDOM = require('react-dom');

var Movie = React.createClass({
    saveMovie:function(movie){
        console.log(movie.Title);
        $.ajax({
            url:"http://localhost:8080/omdb/insert",
            type: "POST",
            datatype: "JSON",
            data:this.props.allMovies,
            success:function(data){
                console.log("inside ajax"+data);
                //this.setState({alldata:data.Search})
                //console.log(temp);
            }.bind(this),
            error:function(err){
                console.log(err);
            }.bind(this)
        });
        console.log("Inside saveMovie");
    },
    render: function() {
        return (
            <div className = "Movie col-md-12" >
                <div className = "col-md-4 movie-img" >
                    <img src = {this.props.allMovies.Poster}/>
                </div>
                <div className = "col-md-6 movie-data" >
                    <p>{this.props.allMovies.Title}</p>
                    <button type="submit" value="addmovie" className="btn btn-primary btn-lg pull-right" onClick={this.saveMovie}> Add </button>
                </div>
            </div >
        );
    }
});

module.exports = Movie;
