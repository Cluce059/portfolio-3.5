import React from 'react';
import pfp from '../../assets/img/pfp.jpg';
import './About.css';
import * as FaIcons from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import resume from '../../assets/files/Luce-resume.C.pdf'
import Jumbotron from '../Jumbotron';

function About(){
  const links ={
    linkedIn: 'https://www.linkedin.com/in/caroline-luce-a314b1224/',
    github: 'https://github.com/Cluce059',
    stackOverflow: 'https://stackoverflow.com/users/17255139/caroline',
    resume: resume
}
    return (
      <Jumbotron>
        <aside class="profile-card">
          <header>
            <a href="/">
              <img src={pfp} />
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
{/* <section>
            <div className="pfp-div">
                <img  src = {pfp}   alt="my profile pic" className="pfp"/>
            </div>
            <div className="about-div">
                <p>Boot Camp Sudent || Web Development || UCF Graduate || Environmental Science || Geostatistical Analysis</p>
            </div>
        </section> */}
export default About;