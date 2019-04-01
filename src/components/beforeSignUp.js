import React, { Component } from 'react';
import '../styles/beforeSignUp.css';
import { NavLink } from 'react-router-dom';

class BeforeSignUp extends Component {
    state = {  }
    render() { 
        return (
            <div className="row">
                <div className="col s12">
                    <h3 className="center-align">Register As...</h3>
                </div>
                <div className="col s6" id="one">
                    <div className="col s12" id="std">
                        <NavLink to="/signupasstudent"><h3 id="std" className="center-align">Student</h3></NavLink>
                    </div>
                    <div className="col s12" id="std">
                        <NavLink to="/signupparent"><h3 id="prnt" className="center-align">Parent</h3></NavLink>
                    </div>
                </div>
                <div className="col s6">
                    <div className="col s12" id="std">
                        <NavLink to="/signupastutor"><h3 id="std" className="center-align">Tutor</h3></NavLink>
                    </div>
                    <div className="col s12" id="std">
                        <NavLink to="/signupinstitute"><h3 id="prnt" className="center-align">Institute</h3></NavLink>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default BeforeSignUp;