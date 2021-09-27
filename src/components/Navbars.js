import React from 'react';
import {NavLink} from "react-router-dom";
import {Nav,Navbar} from 'react-bootstrap'
import logo from '../assets/logo/clglogo.png'
const Navbars = () => {
    return (
      <Navbar style={{"position":"fixed","zIndex":"1","width":"100%","marginBottom": "0"}}  inverse className="fixed-top collapseOnSelect main_nav_bar" bg="light" expand="lg">
      <Navbar.Brand href="#home"><img alt="clg logo" src={logo} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav_links ml-auto">
          <NavLink className="Navs_routes" style={{"color":"black"}} exact to="/">Home</NavLink>
          <NavLink className="Navs_routes" style={{"color":"black"}} exact to="/exploreEvents">Explore Event</NavLink>
          <NavLink className="Navs_routes" style={{"color":"black"}} exact to="/aboutus">About Us</NavLink>
          <NavLink className="Navs_routes" style={{"color":"black"}} exact to="/contactUs">Contact Us</NavLink>
          
          
         
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
    )
}

export default Navbars;