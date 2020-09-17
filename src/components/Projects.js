import React from 'react';
import PROJECTS from '../data/projects';
import '../Project.css';



const Project = (props)=>{
        const {title, image, description, link} = props.project;
        return(
        <div class ="projects"style={{display:'inline-block',width:300, margin:25}}>
            <h3>{title}</h3>
            <img src={image} alt="profile"  />
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
        )
    }

const Projects= ()=> (
    <div className="project">
                <h2>Highlighted Projects</h2>
                <div className="project__name">
                    {
                        PROJECTS.map(PROJECT =>(
                            <Project key= {PROJECT.id} project={PROJECT}/>
                        ))
                        }
                </div>
            </div>
        )
 

export default Projects;