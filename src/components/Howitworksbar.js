import React, { Component } from 'react';
import '../App.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../styles/Howitworks.css';
import workOne from '../images/workOne.jpg';
import workTwo from '../images/workTwo.jpg';
import workThree from '../images/workThree.jpg';
import workFour from '../images/workFour.jpg';

class Howitworksbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App grey lighten-2">
                <div id="rowOne" className="row">
                    <div className="container">
                        <div className="col s8 offset-s2">
                            <h3 className="center-align" >How it Works for Students and Parents</h3>
                        </div>
                    </div>
                </div>
                <div id="rowTwo" className="row">
                    <div className="container">
                        <div className="col s12 m6 l3">
                            <div className="card">
                                <div className="card-image">
                                    <img src={workOne} />
                                </div>
                                <div className="card-content">
                                    <h4 class="center-align">Post Learning Request</h4>
                                    <p class="center-align">Sign up as a student or parent. Post your learning request by selecting your city, area, class, subjects, required timing and budget.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l3">
                        <div className="card">
                                <div className="card-image">
                                    <img src={workTwo} />
                                </div>
                                <div className="card-content">
                                    <h4 class="center-align">Receive Applications</h4>
                                    <p class="center-align">Receive applications from experienced tutors along with the fee they will charge you for teaching.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l3">
                        <div className="card">
                                <div className="card-image">
                                    <img src={workThree} />
                                </div>
                                <div className="card-content">
                                    <h4 class="center-align">Choose Your Tutor</h4>
                                    <p class="center-align">View profiles, previous experience, qualification and ratings of applied tutors. Select any 2 and get 2 days free trial from each.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m6 l3">
                        <div className="card">
                                <div className="card-image">
                                    <img src={workFour} />
                                </div>
                                <div className="card-content">
                                    <h4 class="center-align">Start Learning</h4>
                                    <p class="center-align">Make us advance payment and start learning. View our Payment Terms And Conditions Make us advance payment and start learning. View our Payment Terms And Conditions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Howitworksbar;