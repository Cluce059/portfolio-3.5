import React from "react";
import logo from '../../assets/img/logo.png';
import './logo.css';

function Logo(props){
    return (
        <div className="logo-wrapper">
            <div className="logo-img">
                <img src={logo} alt="logo"></img>
            </div>
        </div>
    )
};

export default Logo;