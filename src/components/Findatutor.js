import React, { Component } from 'react';
import '../styles/Tutorsportal.css';
import { NavLink } from 'react-router-dom';
import  Academiesportal1 from '../images/Academiesportal1.jpg';

class Findatutor extends Component {
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
class Middlepart extends Component {
    state = {  }
    render() { 
        return (
            <div className="row" id="middlepart">
                <div className="container">
                    <Searchfilter />
                    <Searchbarandacademieslist />
                    <Adsbar />
                </div>
            </div>
        );
    }
}
class Welcomebanner extends Component {
    state = {  }
    render() { 
        return (
            <div className="row" id="Tutorswelcome">
                <h2 className="center-align">Welcome to Tutors portal</h2>
                <p className="center-align">Your place to find the best Tutor for you.</p>
                <div className="col s3 offset-s3">
                    <NavLink to="/signupasstudent">
                        <div className="col s9 offset-s3 hide-on-med-and-down" id="course">
                            <h6 className="center-align">Post a Tutoring Request</h6>
                        </div>
                    </NavLink>
                </div>
                <div className="col s3">
                    <div className="col s9 offset-s0 hide-on-med-and-down" id="tttr">
                        <a href="#middlepart"><h6 className="center-align">Find a Tutor</h6></a>
                    </div>
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
                    <NavLink to="/">
                        <div className="col s9 offset-s3 hide-on-large-only" id="course">
                            <h6 className="center-align">Publish Course</h6>
                        </div>
                    </NavLink>
                </div>
                <div className="col s6">
                    <NavLink to="/">
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
class Searchfilter extends Component {
    render() { 
        return (
            <div className="col s4 m3 l3" id="headingofsearch">
                <p>Filter your Search</p>
                <label>Filter by Subject</label>
                <select name="subject" id="subject" className="browser-default">
                    <option value="noValue">Mathematics</option>
                    <option value="noValue">Physics</option>
                    <option value="noValue">Computer</option>
                    <option value="noValue">Biology</option>
                </select><br/>
                <label>Filter by Class</label>
                <select name="class" id="subject" className="browser-default">
                    <option value="noValue">class 1-5</option>
                    <option value="noValue">Class 6-8</option>
                    <option value="noValue">Class 9</option>
                    <option value="noValue">Class 10</option>
                    <option value="noValue">Class 11</option>
                    <option value="noValue">Class 12</option>
                    <option value="noValue">Higher Classes </option>
                </select><br/>
                <label>Filter by City</label>
                <select name="city" id="subject" className="browser-default">
                    <option value="noValue">Lahore</option>
                    <option value="noValue">Karachi</option>
                    <option value="noValue">Faisalabad</option>
                    <option value="noValue">Rawalpindi</option>
                    <option value="noValue">Quetta</option>
                    <option value="noValue">Peshawar</option>
                    <option value="noValue">Gujranwala</option>
                </select><br/>
                    <label>Filter by Gender:
                    <input class="with-gap" name="group3" type="radio" checked />
                    <span>Male</span>
                    </label>
                    <label style={{marginLeft: "15px"}}>
                    <input class="with-gap" name="group3" type="radio" />
                    <span>Female</span>
                    </label>
                <div className="col s12 m8 l6 offset-l3 offset-lm3 offset-s0" id="searchbtn">
                    <a class="waves-effect waves-light btn z-depth-0"><i class="material-icons right">search</i>search</a>
                </div>
            </div>
        );
    }
}
class Searchbarandacademieslist extends Component {
    state = {  }
    render() { 
        return (
            <div className="col s8 m6 l7">
                <div className="col s8 offset-s1" id="searchbar">
                    <input type="text" className="browser-default" placeholder="Search Tutor by Subject" />
                </div>
                <NavLink to="/academiesportal">
                    <div className="col s2 m2 l1" id="searchicon">
                        <i class="material-icons">search</i>                                
                    </div>
                </NavLink>
            </div>
        );
    }
}
class Adsbar extends Component {
    state = {  }
    render() { 
        return (
            <div className="col l2 hide-on-med-and-down" id="rightpart">

            </div>
        );
    }
}

export default Findatutor;