import React, { useEffect, useState } from "react";
import {  Container, Card, CardColumns, Form, Button, Col } from 'react-bootstrap';
import Projects from '../components/Projects';

//import cards and map out in return stmnt
const ProjectPage = () => {

    return (
        <>
        <Container>
            <Projects />
        </Container>
        </>
    )
};

export default ProjectPage;