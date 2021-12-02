import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';

const AppNavbar = () =>{

    return (
        <>
      <Navbar id="navbar" variant='dark' expand='lg' position='sticky'>
      <Container fluid className= "nav-wrapper">
      <Navbar.Toggle aria-controls='navbar' />
            <Navbar.Collapse id="menu">
              <Nav className='ml-auto'>
                  <Nav.Link className="navbar-dark" as={Link} to='/'>
                      Home
                    </Nav.Link>
                  <>
                    <Nav.Link as={Link} to='/mywork'>
                      See my work
                    </Nav.Link>
                    <Nav.Link as={Link} to='/Contact'>
                      Contact
                    </Nav.Link>
                  </>          
              </Nav>
            </Navbar.Collapse> 
      </Container>
    </Navbar>
</>
    )
};

export default AppNavbar;

/**
 * 
class Navbar extends React.Component {
    state = {
      menuToggle: false
    }

  render() {
    return (
        <>
      <nav id="navbar" class="">
  <div class="nav-wrapper">
    <div class="logo">
      <a href="#home"><i class="fas fa-chess-knight"></i> Caroline Luce </a>
    </div>

    <ul id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>

<div class="menuIcon">
  <span class="icon icon-bars"></span>
  <span class="icon icon-bars overlay"></span>
</div>

<div class="overlay-menu">
  <ul id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
</div>
 */