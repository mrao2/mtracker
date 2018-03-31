import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';

const Header = () => {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return(
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">Money-Tracker</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          Link
        </NavItem>
      </Nav>
      <Nav pullRight>
        <GoogleLogin
          clientId="993194236440-21jbmn0hvihasqgjdgjq6r4fd471rdpu.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

      </Nav>
  </Navbar>


)
}
export default Header;
