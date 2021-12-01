import React from 'react';
import pfp from '../../assets/img/pfp.jpg';
import './About.css';
import { Container } from 'react-bootstrap';
import Jumbotron from '../Jumbotron';

function About(){
    return (
      <Jumbotron>
        <aside class="profile-card">
          <header>
            <a href="/">
              <img src={pfp} alt='my project'/>
            </a>
            <h1>Caroline Luce</h1>
          </header>
          <div className="profile-bio">
          <p>Hey there!</p>
          </div>
        </aside>
        <Container >
        <h2>- Full Stack Web Developer -</h2>
           
            <p>Boot Camp Sudent || Web Development || UCF Graduate || Environmental Science || Geostatistical Analysis</p>
          </Container>
        </Jumbotron>
    );
}

export default About;