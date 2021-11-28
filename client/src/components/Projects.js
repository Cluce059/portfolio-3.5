import React, { Component } from "react";
import { FlatList } from "react-native";
import Card from '../Card';

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
      <section className="portfolio-section" id="portfolio">
          <div  className="flex-row">
              <h2>Projects</h2>
          </div>
          <div className="flex-row">
              <div className="card-div">
            {projects.map((project) => (
                <Card project ={project} />
            ))}
            </div>
            </div>
    
        </section>
        </>
    );
};

export default Projects;




