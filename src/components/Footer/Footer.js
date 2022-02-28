import React from 'react';
import * as FaIcons from 'react-icons/fa';
import resume from '../../assets/files/Luce-resume.pdf';
import './footer.css';

function Footer () {
const links ={
    linkedIn: 'https://www.linkedin.com/in/caroline-luce-a314b1224/',
    github: 'https://github.com/Cluce059',
    stackOverflow: 'https://stackoverflow.com/users/17255139/caroline',
    resume: resume
}
return (
    <>
<footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase"> C a r o l i n e  L u c e </h5>

            <ul>
                <li>
                        <a href={links.github} className=""> <FaIcons.FaGitAlt /> Github</a>                                    </li>
                <li>
                    <a href={links.linkedIn}> <FaIcons.FaLinkedin /> LinkedIn</a>
                </li>
                <li>
                    <a href={links.stackOverflow}> <FaIcons.FaStackOverflow /> StackOverflow</a>
                </li>
                <li>
                    <a href={links.resume}> <FaIcons.FaFileAlt /> Resume</a>
                </li>
            </ul>
            </div>
        </div>
    </div>
</footer>
</>
);
}

export default Footer;