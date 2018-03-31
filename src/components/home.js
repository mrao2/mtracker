import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';


const Home = () => {
  return(
    <Grid>
      <Jumbotron>
        <h2>Welcome to the Money Tracker!</h2>
        <p>Login with your google account to get started!</p>
      </Jumbotron>
    </Grid>

)}
export default Home;
