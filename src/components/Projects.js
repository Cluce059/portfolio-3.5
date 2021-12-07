import React from "react";
import Card from '../components/Card/Card';
import { Container, Row } from 'react-bootstrap';

function Projects (){
    const projects = [
        {  
            name: 'Fitness Buddy',
            description: 'A Fitness Application for personalized workout plans',
            img: '0',
            alt: 'Fitness Buddy',
            repo: 'https://github.com/Cluce059/Fitness-Buddy',
            link: 'https://fitness-buddy-2.herokuapp.com/'
        },
        {
            name: 'Portfolio v1',
            description: 'My first portfolio uilt using static HTML and JavaScript',
            img: '1',
            alt: 'My first portfolio',
            repo: 'https://github.com/Cluce059/Portofolio',
            link: 'https://cluce059.github.io/Portofolio/'
        },
        {
            name: 'Trivia Brews',
            description: 'A trivi game with brewery proximity feature',
            img: '2',
            alt: 'Trivia Brews',
            repo: 'https://github.com/Cluce059/TriviaBrews',
            link: 'https://cluce059.github.io/Project1/'
        },
        {
            name: 'Food Festival',
            description: 'Food festival app for finding tickets and events',
            img: '3',
            alt: 'Food Festival',
            repo: 'https://github.com/Cluce059/food-festival',
            link: 'https://cluce059.github.io/food-festival/'
        },
        {
            name: 'Portfolio v2',
            description: 'My second portfolio',
            img: '5',
            alt: 'Portfolio-v2',
            repo: 'https://github.com/Cluce059/portfolio',
            link: '/'
        },
        {
            name: 'News Distillery',
            description: '',
            img: '6',
            alt: 'News',
            repo: 'https://github.com/Cluce059/fitness-buddy-v2',
            link: 'https://news-distillery.herokuapp.com/'
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




