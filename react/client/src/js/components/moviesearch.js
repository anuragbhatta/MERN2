var React  = require('react');
var ReactDOM  = require('react-dom');

var Moviesearch = React.createClass({
    getInitialState:function(){
        return{Title:""};
    },
    handleTitleChange:function(e){
        this.setState({Title:e.target.value});
    },
    submitTitle:function(e){
        e.preventDefault();
        this.props.handleSubmitTitle({Title:this.state.Title});
    },
  render: function() {
    return (
      <div className="Moviesearch row">
        <form className="form-horizontal" role="form" onSubmit={this.submitTitle}>
          <div className="form-group text-center">
            <label className="control-label col-sm-4" htmlFor="moviename">Movie name : </label>
            <input className="col-sm-4" type="text" className="form-control" id="moviename" value={this.state.Title} onChange={this.handleTitleChange}/>
          </div>
            <button type="submit" value="searchmovie" className="btn btn-primary btn-lg pull-right"> Submit </button>
        </form>
      </div>
    );
  }
});

module.exports = Moviesearch;
