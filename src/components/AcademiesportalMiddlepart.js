import React, { Component } from 'react';
import '../styles/Academiesportal.css';
import { NavLink } from 'react-router-dom';

class Middlepart extends Component {
    state = {  }
    render() { 
        return (
            <div className="row" id="middlepart">
                <div className="container">
                    <Searchfilter 
                        label = "Filter by Subject"
                        name = "subject"
                    />
                    <Searchbarandacademieslist />
                    <Adsbar />
                </div>
            </div>
        );
    }
}
class Searchfilter extends Component {
    render() { 
        const {label, name, data} = this.props;
        return (
            <div className="col s4 m3 l3" id="headingofsearch">
                <p>Filter your Search</p>
                <label>{label}</label>
                <select name={name} id="subject" className="browser-default">
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
                    <input type="text" className="browser-default" placeholder="Search Academies by Name" />
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

export default Middlepart;