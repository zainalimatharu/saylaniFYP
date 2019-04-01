import React, { Component } from 'react';
import '../App.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Parents from '../images/Parents.jpg';
import Student from '../images/Student.jpg';
import Tutor2 from '../images/Tutor2.jpg';
import Institute2 from '../images/Institute2.jpg';
import { Link } from 'react-router-dom';

class Registerbar extends Component {
    state = {  }
    render() { 
      return ( 
        <div className="App">
          <div className="row" style={{marginBottom:"0px"}}>
            <Students
            label = "Register As Student"
            text = "Register here. Search for your tutor according to your Subject, class, Area and many other options. Have the best Tutor for you."
            image = {Student}
            />
            <Parent 
            label = "Register As Parents"
            text = "Register here. Search for tutors for your child according to Class, Area, Qualification and many other options. Have the best Tutor for your Child."
            image = {Parents}
            />
            <Tutor 
            label = "Register As Tutor"
            text = "Register here. Create a Profile. Provide your Experties, Qualification, Experiance and other data. Find Tuitions and Become a Tutor."
            image = {Tutor2}
            />
            <Institute 
            label = "Register As Institute"
            text = "Register here. Publish your upcoming and newly started Courses and Classes. Let Students get informed about your Cources and Classes."
            image = {Institute2}
            />
          </div>
        </div>
       );
    }
}
class Students extends Component {
  state = {  }
  render() { 
    const {label, text, image} = this.props;
    return ( 
      <div className="col s12" style={{backgroundColor:"#67624a", padding:"0px"}}>
        <div className="col s12 m12 l6">
          <h3 className="center-align"><span style={{borderLeft:"#d52c82 solid", borderWidth:"6px"}}><Link to="/signupasstudent" style={{color: "white"}}>{label}</Link></span></h3>
          <div className="container" style={{width:"50%", marginTop:"80px"}}>
            <h5 className="center-align hide-on-small-only" style={{color: "white"}}>{text}</h5>
          </div>
        </div>
        <div className="col s6" style={{margin:"0px", paddingRight:"50px"}}>
          <img className="hide-on-med-and-down hoverable" src={image} style={{margin:"22px 19px 19px 19px", width:"100%", height:"100%"}}/>
        </div>
      </div>
     );
  }
}
class Parent extends Component {
  state = {  }
  render() { 
    const {label, text, image} = this.props;
    return ( 
      <div className="col s12" style={{backgroundColor:"#af9999", padding:"0px"}}>
        <div className="col s6" style={{margin:"0px", paddingRight:"50px"}}>
          <img className="hide-on-med-and-down hoverable" src={image} style={{margin:"22px 19px 19px 19px", width:"100%", height:"100%"}}/>
        </div>
        <div className="col s12 m12 l6">
          <h3 className="center-align white-text"><span style={{ borderLeft:"#d52c82 solid", borderWidth:"6px"}}><Link to="/signupparent" style={{color: "white"}}>{label}</Link></span></h3>
          <div className="container" style={{width:"50%", marginTop:"80px"}}>
          <h5 className="center-align hide-on-small-only" style={{color: "white"}}>{text}</h5></div>
        </div>
      </div>
     );
  }
}
class Tutor extends Component {
  state = {  }
  render() { 
    const {label, text, image} = this.props;
    return ( 
      <div className="col s12" style={{backgroundColor:"#ed7f7f", padding:"0px"}}>
        <div className="col s12 m12 l6">
          <h3 className="center-align white-text"><span style={{ borderLeft:"#d52c82 solid", borderWidth:"6px"}}><Link to="/signupastutor" style={{color: "white"}}>{label}</Link></span></h3>
          <div className="container" style={{width:"50%", marginTop:"80px"}}>
          <h5 className="center-align hide-on-small-only" style={{color: "white"}}>{text}</h5></div>
        </div>
        <div className="col s6" style={{margin:"0px", paddingRight:"50px"}}>
          <img className="hide-on-med-and-down hoverable" src={image} style={{margin:"22px 19px 19px 19px", width:"100%", height:"100%"}}/>
        </div>
      </div>
     );
  }
}
class Institute extends Component {
  state = {  }
  render() { 
    const {label, text, image} = this.props;
    return ( 
      <div className="col s12" style={{backgroundColor:"#4a5e67", padding:"0px"}}>
        <div className="col s6" style={{margin:"0px", paddingRight:"50px"}}>
          <img className="hide-on-med-and-down hoverable" src={image} style={{margin:"22px 19px 19px 19px", width:"100%", height:"100%"}}/>
        </div>
        <div className="col s12 m12 l6">
          <h3 className="center-align white-text"><span style={{ borderLeft:"#d52c82 solid", borderWidth:"6px"}}><Link to="/signupinstitute" style={{color: "white"}}>{label}</Link></span></h3>
          <div className="container" style={{width:"50%", marginTop:"80px"}}>
          <h5 className="center-align hide-on-small-only" style={{color: "white"}}>{text}</h5></div>
        </div>
      </div>
     );
  }
}
 
// export default Dummy;
 
export default Registerbar;