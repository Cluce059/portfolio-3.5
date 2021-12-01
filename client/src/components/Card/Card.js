import React from "react";
import {FaGithub} from 'react-icons/fa';
import {MdExitToApp} from 'react-icons/md'; 
import Boop from '../Boop';
import { Card, Container } from 'react-bootstrap';
import './card.css';

const AppCard = (project) => {
	//console.log(project.project.name);
		return (
		<Container>
			<Card border="info" style={{ margin: '2rem' }} className="bg-dark text-white" id="card-container">
				<Card.Link href={project.project.link}>
					<Card.Img   id="card-img"
						src={require(`../../assets/img/${project.project.img}.png`).default}
						alt={project.project.alt}
						key={project.project.name} >
					</Card.Img>
				</Card.Link>
				<Card.Title key={project.project.name} style={{ margin: '1rem' }} > {project.project.name}</Card.Title>
				<Card.Subtitle style={{ margin: '1rem' }}>{project.project.description}</Card.Subtitle>
				<Card.Footer>
					<Boop rotation={20} timing={200}> 
						<a className="project-icon" href = {project.project.link}>
							<MdExitToApp /> 
						</a> 
					</Boop>
					<Boop rotation={20} timing={200}>
						<a className="project-icon" href={project.project.repo}> 
							<FaGithub /> 
						</a>                                         
					</Boop>
				</Card.Footer>
				</Card>
			</Container>
		);
};

export default AppCard;
/*
<div class="card-list">
	<article class="card">
	<figure class="card-image">
		<img className="card-img"
		   src={require(`../assets/img/${project.project.img}.png`).default}
		   alt={project.project.alt}
		   key={project.project.name} 
		   />
	</figure>
	<div class="card-header">
		<a href={project.project.link}>{project.project.name}</a>
		<p>{project.project.description}</p>
	</div>
	<div class="card-footer">
	<Boop rotation={20} timing={200}> 
    	<a className="project-icon" href = {project.project.link}>
            <MdExitToApp /> 
		</a> 
    </Boop>
    <Boop rotation={20} timing={200}>
        <a className="project-icon" href={project.project.repo}> 
			<FaGithub /> 
		</a>                                         
    </Boop>
	</div>
</article>
</div>
*/