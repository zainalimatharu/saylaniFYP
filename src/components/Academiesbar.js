import React, { Component } from 'react';
import '../App.css';
import '../styles/AcademiesportalStyles.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class Academiesbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App">
                <div className="row hoverable" id="AcademiesportalWrapper">
                    <a href="#">
                        <div className="container">
                            <h3 className="center-align hide-on-small-only">Visit Academies/Coaching Institutes. <br/>Find Courses of your interest.</h3>
                            <h3 className="center-align hide-on-med-and-up">Visit Academies and Coaching Institutes. <br/>Find Courses of your interest.</h3>
                            <div className="col s6 offset-s4 hide-on-small-only"><b><a class="waves-effect waves-light btn z-depth-0">Srearch for Courses and Academies</a></b></div>
                            <div className="col s12 hide-on-med-and-up"><b><a class="waves-effect waves-light btn z-depth-0">Srearch for Courses and Academies</a></b></div>
                        </div>
                    </a>
                </div>
            </div>
         );
    }
}
 
export default Academiesbar;