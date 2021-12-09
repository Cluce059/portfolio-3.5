import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import Logo from '../Logo/Logo.js';
import { NavLink } from 'react-router-dom';
import { FaGripLines, FaTimes } from 'react-icons/fa';

function AppNavbar(){
    const [click, setClick] = useState(false);

    const handleClick =() => setClick(!click);
    return (
        <>
      <div className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
            CAROLINE LUCE
            </NavLink>

            <ul className={click ? "nav-menu active": "nav-menu"}>
                <li className="nav-item">
                    <NavLink exact to="/" 
                    activeClassName="active" 
                    className="nav-links"
                    onClick={handleClick}>
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/About" 
                    activeClassName="active" 
                    className="nav-links"
                    onClick={handleClick}>
                        My Work
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact to="/Contact" 
                    activeClassName="active" 
                    className="nav-links"
                    onClick={handleClick}>
                        Contact
                    </NavLink>
                </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
                {click ? <FaTimes/> : <FaGripLines/>}
           </div>
          </div>
    </div>
</>
    )
};

export default AppNavbar;
