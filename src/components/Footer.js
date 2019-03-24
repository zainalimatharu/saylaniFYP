import React, { Component } from 'react';
import '../App.css';
import '../styles/Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        return ( 
            <footer class="page-footer">
                <div class="container">
                    <div class="row" style={{marginLeft: "60px"}}>
                        <Dummy
                            colSize = "col s12 m6 l3"
                            heading = "Tutor by City"
                            data = {["Islamabad", "Karachi", "Peshawar", "Quetta", "Lahore", "Gujranwala", "Faisalabad", "Rawalpindi", "Multan", "Sargodha", "Hafizabad"]}
                        />
                        <Dummy
                            colSize = "col s12 m6 l3"
                            heading = "Tutor by Class"
                            data = {["Class 1-5", "Class 6", "Class 7", "Class 8", "Class 9", "Class 10","Intermediate" ,"B.Sc", "Bachelors", "Masters", "Doctrate"]}
                        />
                        <Dummy
                            colSize = "col s12 m6 l3"
                            heading = "Tutor by Subject"
                            data = {["Quran e Majeed", "Competitive Exams", "Entrance Exams", "Spoken English", "Computer Programming", "Graphic Designing", "Cehmistry", "Mathematics" ,"Urdu literature", "Physics", "Biology"]}
                        />
                        <Dummy
                            colSize = "col s12 m6 l3"
                            heading = "Institutions"
                            data = {["Saylani", "The Skills", "Gemica Cloud", "Students Inn", "Kips Academy", "STEP"]}
                        />
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                    <span class="left">© 2019 Copyright Text</span>
                    <a class="grey-text text-lighten-4 right" href="#!">About Developers</a>
                    </div>
                </div>
            </footer>
         );
    }
}
class Dummy extends Component {
    state = {  }
    render() { 
        const {colSize, heading, data} = this.props;
        return ( 
            <div className={colSize}>
            <b>{heading}</b><br/><br/>
            <a className="white-text">{data[0]}</a><br/><br/>
            <a className="white-text">{data[1]}</a><br/><br/>
            <a className="white-text">{data[2]}</a><br/><br/>
            <a className="white-text">{data[3]}</a><br/><br/>
            <a className="white-text">{data[4]}</a><br/><br/>
            <a className="white-text">{data[5]}</a><br/><br/>
            <a className="white-text">{data[6]}</a><br/><br/>
            <a className="white-text">{data[7]}</a><br/><br/>
            <a className="white-text">{data[8]}</a><br/><br/>
            <a className="white-text">{data[9]}</a><br/><br/>
            <a className="white-text">{data[10]}</a><br/><br/>
            <div className="divider"></div><br/><br/>
        </div>
         );
    }
}
 
// export default Dummy;
 
export default Footer;