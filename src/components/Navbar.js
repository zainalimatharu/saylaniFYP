import React, { Component } from 'react';
import '../App.css';
import  M from 'materialize-css/dist/js/materialize.min.js';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  componentDidMount() {
    M.Sidenav.init(this.refs.mySidenav)
  }
    render() { 
        return ( 
            <div className="App">
              <nav className="z-depth-0" id="sticky">
                <div class="nav-wrapper">
                <NavLink to="/"><a href="#!" class="brand-logo hide-on-med-and-down"><h5><b>Home</b></h5></a></NavLink>
                  <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons" id="manu">menu</i></a>
                  <ul className="right hide-on-med-and-down">
                    <li className="common"><b><NavLink to="/findatutor">Find a Tutor</NavLink></b></li>
                    <li className="common"><b><NavLink to="/howitworks">How it Works</NavLink></b></li>
                    <li className="common"><b><NavLink to="/signup">Sign Up</NavLink></b></li>
                    <li className="common"><b><NavLink to="/signin">log in</NavLink></b></li>
                    <li><b><NavLink to="/academiesportal" style={{color: "#1e272e", backgroundColor: "#dfe6e9", marginLeft: "10px"}}>Academies Portal</NavLink></b></li>
                  </ul>
                  <ul className="right hide-on-large-only">
                    <li className="common"><b><NavLink to="/signup">Sign Up</NavLink></b></li>
                    <li className="common"><b><NavLink to="/signin">log in</NavLink></b></li>
                  </ul>
                </div>
              </nav>
              <ul ref="mySidenav" class="sidenav" id="mobile-demo">
                <li><NavLink to="/findatutor">Find a Tutor</NavLink></li>
                <li><NavLink to="/howitworks">How it Works</NavLink></li>
                <li><NavLink to="/academiesportal">Academies Portal</NavLink></li>
              </ul>
            </div>
         );
    }
}
 
export default Navbar;