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
      <Jumbotron>
  <Container>
    <div class="text-center center-block" id="logo">
      <h1>Caroline Luce</h1>
      <h4>Full Stack Web Developer</h4>
      <ul class="social">
        <li><a href={links.linkedIn}><i><FaIcons.FaLinkedin /></i></a></li>
        <li><a href={links.github}><FaIcons.FaGitAlt /></a></li>
        <li><a href={links.stackOverflow}><FaIcons.FaStackOverflow /> </a></li>
        <li><a href={links.resume}> <FaIcons.FaFileAlt /> Resume</a></li>
      </ul>
    </div>
  </Container>
  </Jumbotron>
    )
}
export default Contact;