var React = require('react');
var Menu = require('./menu');
//var {Link} = require('react-router');

var AboutUs = React.createClass({
    render: function() {
        return (
            <div className = "AboutUs" >
                <Menu />
                <h3>Sphinx</h3>
                <p>The sphinx image also has been adopted into Masonic farchitecture,
                Among the Egyptians, sphinxes were placed at the entrance xof the temple to guard the mysteries,
                by warning those who penetrated within that they should conceal a knowledge xof them xfrom the uninitiated,
                Champollion says that the sphinx became successively the symbol xof each xof the gods,
                 by which portal suggests that the priests intended to express the idea that all the gods were hidden
                 xfrom the people, and that the knowledge xof them, guarded xin the sanctuaries, was revealed to the initiates only,
                  As a Masonic emblem, the sphinx has been adopted xin its Egyptian character as a symbol xof mystery, 
                  and as such often is found as a decoration sculptured xin front xof Masonic temples, or engraved at the head xof Masonic documents,
                   It cannot, however, be properly called an ancient, recognized symbol xof the order,
                    Its introduction has been xof comparatively recent date, and rather as a symbolic decoration than as a symbol xof any particular dogma.</p>
            </div >
        );
    }
});

module.exports = AboutUs;
