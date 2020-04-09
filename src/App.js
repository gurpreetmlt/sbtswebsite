import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import AppIndex from './components/index';
import './App.css';
import './assets/css/customAnimation.css';
import services from './components/services';
import careers from './components/careers';
import media from './components/media';
import contactus from './components/contactus';
import eGoverment from './components/products/eGoverment';
import financial from './components/products/financial';
import training from './components/products/training';
import callCenter from './components/products/callCenter';
import privacyPolicies from './components/privacyPolicies';
import portfolio from './components/portfolio';


function App() {
  return (
    <Router>
      <div className='App'>
      <Switch>
        <Route path="/" exact component={AppIndex} />
        <Route path="/services" component={services} />
        <Route path="/careers" component={careers} />
        <Route path="/media" component={media} />\
        <Route path="/contactus" component={contactus} />
        <Route path="/eGoverment" component={eGoverment} />
        <Route path="/financial" component={financial} />
        <Route path="/training" component={training} />
        <Route path="/callcenter" component={callCenter} />
        <Route path="/privacy" component={privacyPolicies} />
        <Route path="/portfolio" component={portfolio} />
     </Switch>
    </div>
  </Router>
  );
}

export default App;
