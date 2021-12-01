import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar2 = () => {
    return (
      <>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container fluid className= "headwrap">
            <Navbar.Toggle aria-controls='navbar' />
            <Navbar.Collapse id='navbar'>
              <Nav className='ml-auto'>
             <Nav.Link as={Link} to='/'>
                 Home
                </Nav.Link>
                  <>
                    <Nav.Link as={Link} to='/About'>
                      See My work
                    </Nav.Link>
                  </>          
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  };
  
  export default Navbar2;