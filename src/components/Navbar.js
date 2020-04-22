import React, {Component} from 'react';
import {NavLink, HashRouter } from 'react-router-dom';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../../node_modules/react-bootstrap';

class NavBar extends Component {
    render() {
        return(
            <div className='container bg-color' fluid="true">
    <Navbar expand='true' className="font-signika d-flex flex-wrap h2 bg-color font-color-dark justify-content-xs-around">
      <NavLink exact to={process.env.PUBLIC_URL+"/"}className=' col-xs-12 col-sm-12 col-md-3  text-center text-wrap  font-color-dark nav-item '><h3>Study Overview</h3></NavLink>
      <NavLink to={process.env.PUBLIC_URL+"/eligibility"}className=' col-xs-12 col-sm-12 col-md-3  text-center font-color-dark nav-item '><h3>Eligibility</h3></NavLink>
      <NavLink to= {process.env.PUBLIC_URL+"/participation"}className='col-xs-12 col-sm-12 col-md-3 col  text-center  font-color-dark nav-item '><h3>Participation</h3></NavLink>
      <NavLink to={process.env.PUBLIC_URL+"/researchers"}className='col-xs-12 col-sm-12 col-md-3 text-wrap text-center font-color-dark nav-item '><h3>The Researchers</h3></NavLink>
    </Navbar>
    
    
  </div>

        );
    }
}

export default NavBar;