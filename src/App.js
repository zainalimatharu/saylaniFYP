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
import  Findatutor from './components/Findatutor.js';
import  Academiesportal from './components/Academiesportal.js';
import  Howitworks from './components/Howitworks.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <div className="App">
              <Route exact path="/" component={Slider} />
              <Route exact path="/" component={Registerbar} />
              <Route exact path="/" component={Academiesbar} />
              <Route exact path="/" component={Howitworksbar} />
              <Route exact path="/" component={Footer} />
              <Route path="/signin" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/findatutor" component={Findatutor} />
              <Route path="/academiesportal" component={Academiesportal} />
              <Route path="/howitworks" component={Howitworks} />
            </div>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
