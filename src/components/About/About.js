import React from 'react';
import pfp from '../../assets/img/pfp.jpg';
import './About.css';
import { Container } from 'react-bootstrap';
import Jumbotron from '../Jumbotron';

function About(){
    return (
      <Jumbotron>
        <aside>
          <header>
            <a href='/'>
              <img src={pfp} alt='my_pfp'/>
            </a>
            <h1>Caroline Luce</h1>
          </header>
          <div className="profile-bio">
          <p style={{font:'rgb(121 250 204)'}}>Hey there!</p>
          </div>
        </aside>
        <Container className="about-container">
        <h2>- Full Stack Developer -</h2>
           
            <p>Boot Camp Graduate || Web Development || UCF Graduate || Environmental Science || Geostatistical Analysis</p>
          </Container>
        </Jumbotron>
    );
}

export default About;