import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Navbars from './components/Navbars';
import Footer from './components/Footer';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import TechnicalEvents from './pages/TechnicalEvents';
import NonTechnicalEvent from './pages/NonTechnicalEvent';
import Webinars from './pages/Webinars';
import RegistrationDone from './pages/RegistrationDone';
import About from './pages/About';
import Information from './pages/Information';
import EventRegistration from './pages/EventRegistration';
function App() {
  return (
    <div className="main_page">
    <Navbars/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/exploreEvents" component={Explore}/>
      <Route exact path="/contactUs" component={Contact}/>
      <Route exact path="/technicalEvents" component={TechnicalEvents}/>
      <Route exact path="/NonTechnicalEvent" component={NonTechnicalEvent}/>
      <Route exact path="/webinars" component={Webinars}/>
      <Route exact path="/:id/eventDetails" component={Information}/>
      <Route exact path="/:id/eventRegistration" component={EventRegistration}/>
      <Route exact path="/regdone" component={RegistrationDone}/>
      <Route exact path="/aboutus" component={About}/>
      
    </Switch>
    <Footer/>
    </div>
    
  );
}

export default App;
