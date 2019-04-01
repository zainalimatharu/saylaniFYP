import React, { Component } from 'react';
import '../styles/Signup.css';
import { NavLink } from 'react-router-dom';

class Signupasparents extends Component {
    state = {  }
    render() { 
        return (
            <div className="row" id="signup">
                <div className="col s12 m12 l6" id="signupleft">
                    <div className="col s12 m12 l6 offset-l6">
                        <h3 className="center-align"><b>Sign Up</b></h3>
                        <p className="center-align">Register here. Search for tutors for your child according to Class, 
                            Area, Qualification and many other options. Have the best Tutor for your Child.</p>
                    </div>
                </div>
                <div className="col s12 m12 l6" id="signupright">
                    <div className="col s12 m12 l6">
                        <div className="col s11 offset-s1">
                            <form action="#" id="signupform">
                                <label htmlFor="signupname">Name:</label><br/>
                                <input className="browser-default" type="text" name="name" id="signupname"/>
                                <label htmlFor="signupemail">Email:</label><br/>
                                <input className="browser-default" type="email" name="email" id="signupemail"/>
                                <label htmlFor="signuppassword">Password:</label><br/>
                                <input className="browser-default" type="password" name="password" id="signuppassword"/><br/><br/>
                                <NavLink to="/"><input id="signuplink" type="submit" value="Sign Up" /></NavLink>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Signupasparents;