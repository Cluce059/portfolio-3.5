import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from '../Jumbotron';
import resume from '../../assets/files/Luce-resume.C.pdf';
import * as FaIcons from 'react-icons/fa';
import './contact.css';
import {Button} from 'react-bootstrap';

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
      <h1>Caroline Luce</h1>
      <h2>Full Stack Web Developer</h2>
      <h3>Based in Pennsville, NJ</h3>
      <Container>
        <h4>Send me an email: 
          <div className="btn-border">
          <Button className="contact-btn">
            <a href="mailto:cluce059@gmail.com">
              cluce059@gmail.com
            </a>
          </Button>
          </div>
          </h4>
        </Container>
  
<Button href={links.linkedIn} className="contact-btn">
      <a href={links.linkedIn} >
        <FaIcons.FaLinkedin />
        </a>
</Button>
<Button href={links.github} className="contact-btn">
            <a href={links.github}>
              <FaIcons.FaGitAlt />
            </a>
        </Button>
        <Button href={links.stackOverflow} className="contact-btn">
          <a href={links.stackOverflow}>
            <FaIcons.FaStackOverflow /> 
          </a>
        </Button>
        <Button href={links.resume} className="contact-btn">
        <div className="resume-div">
          <a href={links.resume}>
          <FaIcons.FaFileAlt /> <span> Resume</span>
         </a>
        </div>
        </Button>
  
  </Container>
  </Jumbotron>
    )
}
export default Contact;