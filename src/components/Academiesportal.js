import React, { Component } from 'react';

class Academiesportal extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <h3 className="center-align">This is a place where academies, Coaching Intitutes, Schools and othet institutes publish their courses and classes.</h3>
                        <p></p>
                    </div>
                    <div className="divider"></div>
                    <div className="row">
                        <h3 className="center-align">Publish an upcoming classes and course</h3>
                        <p></p>
                    </div>
                    <div className="divider"></div>
                    <div className="row">
                        <h3 className="center-align">Publish newly started classes and courses</h3>
                    </div>
                    <div className="divider"></div>
                    <div className="row">
                        <h3 className="center-align">Post a request to hire a Tutor</h3>
                    </div>
                    <div className="divider"></div>
                </div>
            </div>
        );
    }
}
 
export default Academiesportal;