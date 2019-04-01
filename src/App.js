import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import  M from 'materialize-css/dist/js/materialize.min.js';
import  logo from './images/logo.jpg';
import  Navbar from './components/Navbar';
import  Slider from './components/Slider';
import  Registerbar from './components/Registerbar';
import  Howitworksbar from './components/Howitworksbar';
import  Footer from './components/Footer';
import  Academiesbar from './components/Academiesbar';
import  Login from './components/Signin.js';
import  Signup from './components/Signup.js';
import  Signupastutor from './components/Signupastutor.js';
import  Signupasstudent from './components/Signupasstudent.js';
import  Signupasinstitute from './components/Signupasinstitute.js';
import  Signupasparents from './components/Signupasparents.js';
import  Findatutor from './components/Findatutor.js';
import  Academiesportal from './components/Academiesportal.js';
import  Howitworks from './components/Howitworks.js';
import  BeforeSignUp from './components/beforeSignUp.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './redux/store/store';
import { Provider } from 'react-redux';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Provider store = {store} >
              <div className="App">
                <Route exact path="/" component={Slider} />
                <Route exact path="/" component={Registerbar} />
                <Route exact path="/" component={Academiesbar} />
                <Route exact path="/" component={Howitworksbar} />
                <Route exact path="/" component={Footer} />
                <Route path="/signin" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/signupasstudent" component={Signupasstudent} />
                <Route path="/signupastutor" component={Signupastutor} />
                <Route path="/signupinstitute" component={Signupasinstitute} />
                <Route path="/signupparent" component={Signupasparents} />
                <Route path="/beforesignup" component={BeforeSignUp} />
                <Route path="/findatutor" component={Findatutor} />
                <Route path="/findatutor" component={Footer} />
                <Route path="/academiesportal" component={Academiesportal} />
                <Route path="/academiesportal" component={Footer} />
                <Route path="/howitworks" component={Howitworks} />
              </div>
            </Provider>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
