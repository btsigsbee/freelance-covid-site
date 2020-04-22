import React, {Component} from 'react';
import {NavLink, } from 'react-router-dom';
import '../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from '../../node_modules/react-bootstrap';

class NavBar extends Component {
    render() {
        return(
            <div className='container bg-color' fluid="true">
    <Navbar expand='true' className="font-signika d-flex flex-wrap h2 bg-color font-color-dark justify-content-xs-around">
      <NavLink exact to={process.env.PUBLIC_URL+"/"}className=' col-xs-12 col-sm-12 col-md-3  text-center text-wrap  font-color-dark nav-item '><h4>Study Overview</h4></NavLink>
      <NavLink to={process.env.PUBLIC_URL+"/eligibility"}className=' col-xs-12 col-sm-12 col-md-3  text-center font-color-dark nav-item '><h4>Eligibility</h4></NavLink>
      <NavLink to= {process.env.PUBLIC_URL+"/participation"}className='col-xs-12 col-sm-12 col-md-3 col  text-center  font-color-dark nav-item '><h4>Participation</h4></NavLink>
      <NavLink to={process.env.PUBLIC_URL+"/researchers"}className='col-xs-12 col-sm-12 col-md-3 text-wrap text-center font-color-dark nav-item '><h4>The Researchers</h4></NavLink>
    </Navbar>
    
    
  </div>

        );
    }
}

export default NavBar;