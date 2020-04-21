import React, {Component, Link} from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Researchers from './components/researches';
import Eligibility from './components/eligibility';
import Participation from './components/participation';
import Overview from './components/overview';

class App extends Component {
  render(){
  return (
    <BrowserRouter basename={'covidparentingwork.github.io'} >
    

    <div className=' bg-color'>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Overview}/>
          <Route path="/eligibility" component={Eligibility}/>
          <Route path="/participation" component={Participation}/>
          <Route path="/researchers" component={Researchers}/>
        </Switch>
      
      
    </div>
    </BrowserRouter>
    
    
    
  );
}
}
export default App;
