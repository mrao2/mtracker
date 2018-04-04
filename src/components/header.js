import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

const Header = () => {

  return(
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='/mtracker'>Money-Tracker</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
      <Nav>
      <NavItem eventKey={1} href="/mtracker">
        Home
      </NavItem>
      <NavItem eventKey={2} href="/mtracker/Dashboard">
        Dashboard
      </NavItem>
      </Nav>
  </Navbar>


)
}
export default Header;
