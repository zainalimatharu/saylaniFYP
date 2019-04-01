import React, { Component } from 'react';
import '../App.css';
import '../styles/Academiesportalbar.css';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

class Academiesbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App">
                <NavLink to="/academiesportal">
                    <div className="row hoverable" id="AcademiesportalWrapper">
                        <div className="container">
                            <h3 className="center-align hide-on-small-only">Visit Academies/Coaching Institutes. <br/>Find Courses of your interest.</h3>
                            <h3 className="center-align hide-on-med-and-up">Visit Academies and Coaching Institutes. <br/>Find Courses of your interest.</h3>
                            <div className="col s6 offset-s4 hide-on-small-only"><b><span class="waves-effect waves-light btn z-depth-0">Srearch for Courses and Academies</span></b></div>
                            <div className="col s12 hide-on-med-and-up"><b><span class="waves-effect waves-light btn z-depth-0">Srearch for Courses and Academies</span></b></div>
                        </div>
                    </div>
                </NavLink>
            </div>
         );
    }
}
 
export default Academiesbar;