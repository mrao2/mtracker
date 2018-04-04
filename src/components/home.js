import React from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './home.css';


const Home = () => {
  return(
    <Grid>
      <Jumbotron>
        <h2>Welcome to the Money Tracker!</h2>
        <p>Click the Dasboard button to get started!</p>
      </Jumbotron>
    </Grid>

)}
export default Home;
