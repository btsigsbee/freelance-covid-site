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
    <BrowserRouter basename={process.env.PUBLIC_URL} >
    

    <div className=' bg-color'>
      <Navbar/>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL+"/"} component={Overview}/>
          <Route path={process.env.PUBLIC_URL+"/eligibility"} component={Eligibility}/>
          <Route path={process.env.PUBLIC_URL+ "/participation"} component={Participation}/>
          <Route path={process.env.PUBLIC_URL+"/researchers"} component={Researchers}/>
        </Switch>
      
      
    </div>
    </BrowserRouter>
    
    
    
  );
}
}
export default App;
