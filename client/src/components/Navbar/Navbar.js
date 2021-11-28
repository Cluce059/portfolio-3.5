import React from 'react';
import './nav.css';

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
</>
    )
    }
  }




export default Navbar;