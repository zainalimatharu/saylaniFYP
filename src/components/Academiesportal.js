import React, { Component } from 'react';
import '../styles/Academiesportal.css';
import { NavLink } from 'react-router-dom';
import  Academiesportal1 from '../images/Tutorsportal1.jpg';
import Middlepart from './AcademiesportalMiddlepart';

class Academiesportal extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Welcomebanner />
                <Dragdownbtn />
                <Welcomebannerhideonlarge />
                <Middlepart />
            </div>
        );
    }
}
class Welcomebanner extends Component {
    state = {  }
    render() { 
        return (
            <div className="row" id="welcome">
                <h2 className="center-align">Welcome to Academies portal</h2>
                <p className="center-align">Your place to publish upcoming, newly started, currently running courses and classes</p>
                <div className="col s2 offset-s4">
                    <NavLink to="/signupinstitute">
                        <div className="col s9 offset-s3 hide-on-med-and-down" id="course">
                            <h6 className="center-align">Publish Course</h6>
                        </div>
                    </NavLink>
                </div>
                <div className="col s2">
                    <NavLink to="/signupinstitute">
                        <div className="col s9 offset-s0 hide-on-med-and-down" id="tttr">
                            <h6 className="center-align">Hire a Tutor</h6>
                        </div>
                    </NavLink>
                </div>
            </div>
        );
    }
}
class Welcomebannerhideonlarge extends Component {
    state = {  }
    render() { 
        return (
            <div className="row" id="largeonly">
                <div className="col s6">
                    <NavLink to="/signupinstitute">
                        <div className="col s9 offset-s3 hide-on-large-only" id="course">
                            <h6 className="center-align">Publish Course</h6>
                        </div>
                    </NavLink>
                </div>
                <div className="col s6">
                    <NavLink to="/signupinstitute">
                        <div className="col s9 offset-s0 hide-on-large-only" id="tttr">
                            <h6 className="center-align">Hire a Tutor</h6>
                        </div>
                    </NavLink>
                </div>
            </div>
        );
    }
}
class Dragdownbtn extends Component {
    state = {  }
    render() { 
        return (
            <div className="row" id="btttn">
                <div className="col s1 offset-s5">
                    <div className="col s3 offset-s9">
                        <a href="#middlepart" class="btn-floating waves-effect waves-light red center-align">
                            <i class="large material-icons">arrow_drop_down</i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

// export default Welcomebanner;
 
// export default Welcomebannerhideonlarge;

// export default Dragdownbtn;

export default Academiesportal;