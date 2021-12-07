import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from '../Jumbotron';
import resume from '../../assets/files/Luce-resume.C.pdf';
import * as FaIcons from 'react-icons/fa';
import './contact.css';

function Contact(){
    const links = {
        linkedIn: 'https://www.linkedin.com/in/caroline-luce-a314b1224/',
        github: 'https://github.com/Cluce059',
        stackOverflow: 'https://stackoverflow.com/users/17255139/caroline',
        resume: resume
    }
    return (
      <Jumbotron className="jumbo">
  <Container className="contact-container">
    <div class="text-center center-block" id="logo">
      <h1>Caroline Luce</h1>
      <h4>Full Stack Web Developer</h4>
      <Container>
        <h3>Send me an email: <a href="mailto:cluce059@gmail.com">cluce059@gmail.com</a></h3>
        </Container>
      <ul class="social">
        <li><a href={links.linkedIn}><i><FaIcons.FaLinkedin /></i></a></li>
        <li><a href={links.github}><FaIcons.FaGitAlt /></a></li>
        <li><a href={links.stackOverflow}><FaIcons.FaStackOverflow /> </a></li>
        <div className="resume-div">
        <li><a href={links.resume}> <FaIcons.FaFileAlt /> <span> Resume</span></a></li>
        </div>
      </ul>
    </div>
  </Container>
  </Jumbotron>
    )
}
export default Contact;