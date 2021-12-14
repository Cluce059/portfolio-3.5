import React from "react";
import Card from '../components/Card/Card';
import { Container, Row } from 'react-bootstrap';

function Projects (){
    const projects = [
        {
            name: 'Fungi Catelogue',
            description: 'A personal project - pictures of cool fungi I come across (IN DEVELOPMENT => Link to Github Repo)',
            img: '0',
            alt: 'Fungi Portfolio',
            repo: 'https://github.com/Cluce059/Fungi-Portfolio',
            link: 'https://github.com/Cluce059/Fungi-Portfolio'
        },
        {
            name: 'News Distillery',
            description: 'News Search Application (no-cors is enabled in production environment)',
            img: '1',
            alt: 'News',
            repo: 'https://github.com/Cluce059/fitness-buddy-v2',
            link: 'https://news-distillery.herokuapp.com/'
        },
        {  
            name: 'Fitness Buddy',
            description: 'A Fitness Application for personalized workout plans',
            img: '2',
            alt: 'Fitness Buddy',
            repo: 'https://github.com/Cluce059/Fitness-Buddy',
            link: 'https://fitness-buddy-2.herokuapp.com/'
        },
        {
            name: 'Trivia Brews',
            description: 'A trivia game with brewery proximity feature',
            img: '3',
            alt: 'Trivia Brews',
            repo: 'https://github.com/Cluce059/TriviaBrews',
            link: 'https://cluce059.github.io/Project1/'
        },
        {
            name: 'Portfolio v2',
            description: 'My second portfolio',
            img: '4',
            alt: 'Portfolio-v2',
            repo: 'https://github.com/Cluce059/portfolio',
            link: '/'
        },
        {
            name: 'Portfolio v1',
            description: 'My first portfolio',
            img: '5',
            alt: 'My first portfolio',
            repo: 'https://github.com/Cluce059/Portofolio',
            link: 'https://cluce059.github.io/Portofolio/'
        }
        ];

    return (
        <>
        <Container style={{padding: '1.5rem'}}>
              <h2>Projects</h2>
          </Container>
        <Container>
        <Row xs={1} md={2} className="g-4">
        {projects.map((project) => (
                <Card project ={project} />
            ))}
            </Row>
        </Container>
        </>
    );
};
//<CardColumns style={{margin: '25px'}}>

export default Projects;




