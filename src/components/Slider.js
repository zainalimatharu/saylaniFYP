import React, { Component } from 'react';
import '../App.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../styles/Slider.css';
import  Slider1 from '../images/Slider1.jpg';
import  Slider7 from '../images/Slider7.jpg';
import  Slider5 from '../images/Slider5.jpg';

class Slider extends Component {

    componentDidMount() {
             M.Slider.init(this.refs.slider);
    }

    state = {  }
    render() { 
        return ( 
            <div className="App">
                <div ref="slider" className="slider">
                    <ul className="slides">
                        <li>
                            <img src={Slider1} />
                            <div class="caption left-align">
                                <h3>Find Tutor by Subject!</h3>
                                <h5>Computer</h5>
                                <h5>Mathematics</h5>
                                <h5>English</h5>
                            </div>
                        </li>
                        <li>
                            <img src={Slider7} />
                            <div class="caption center-align">
                                <h3>Find Experianced and Varified Tutors!</h3>
                                <h5>Highly Qualified</h5>
                                <h5>Passionate</h5>
                                <h5>varified</h5>
                            </div>
                        </li>
                        <li>
                            <img src={Slider5} />
                            <div class="caption right-align">
                                <h3>Find Tutor by Class!</h3>
                                <h5>Class 1-5</h5>
                                <h5>Class 6-8</h5>
                                <h5>Matric/O-Level</h5>
                            </div>
                        </li>
                    </ul>
                </div>  
            </div>
         );
    }
}
 
export default Slider;