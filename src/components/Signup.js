import React, { Component } from 'react';
import '../styles/Signup.css';

class Signup extends Component {
    state = {  }
    render() { 
        return (
            <div className="row" id="login">
                <div class="col s6 offset-s5">
                    <div className="container">
                        <div class="row" style={{margin:"0px"}}>
                            <div>
                                <h3 className="center-align">Sign Up</h3>
                                <h6 className="center-align">With your Zau Account</h6>
                            </div>
                        </div>
                        <div className="row">
                            <form className="col s12">
                                <div class="row" style={{margin:"0px"}}>
                                    <div class="input-field col s12 offset-s0">
                                        <i class="material-icons prefix" id="localicon">account_circle</i>
                                        <input id="icon_prefix" type="text" class="validate" />
                                        <label for="icon_prefix">User Name</label>
                                    </div>
                                </div>
                                <div class="row" style={{margin:"0px"}}>
                                    <div class="input-field col s12 offset-s0">
                                        <i class="material-icons prefix" id="localicon">email</i>
                                        <input id="icon_Email" type="tel" class="validate" />
                                        <label for="icon_Email">Email</label>
                                    </div>
                                </div>
                                <div class="row" style={{margin:"0px"}}>
                                    <div class="input-field col s12 offset-s0">
                                        <i class="material-icons prefix" id="localicon">fingerprint</i>
                                        <input id="icon_Email" type="password" class="validate" />
                                        <label for="icon_Email">Password</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <select class="browser-default">
                                        <option value="" disabled selected>Sign Up As...</option>
                                        <option value="1">Student</option>
                                        <option value="2">Tutor</option>
                                        <option value="3">Parents</option>
                                        <option value="4">Institute</option>
                                    </select>
                                </div>
                                <div class="row">
                                    <div class="col s8 m6 l4 offset-l5 offset-m4 offset-s3">
                                        <a class="waves-effect waves-light btn z-depth-0"><b>Ok Sign Up</b></a>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s8 m6 l4 offset-l5 offset-m4 offset-s3">
                                        <b>Already have account ?</b>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Signup;