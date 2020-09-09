import React,{Component} from 'react';
import PROJECTS from './data/projects';
import './Project.css';



class Project extends Component{
    render(){
        
        const {title, image, description, link} = this.props.project;
        return(
        <div class ="projects"style={{display:'inline-block',width:300, margin:25}}>
            <h3>{title}</h3>
            <img src={image} alt="profile"  />
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
        )
    }
}
class Projects extends Component {
    render(){
        return(
            <div className="project">
                <h2>Highlighted Projects</h2>
                <div className="project__name">
                    {
                        PROJECTS.map(PROJECT =>{
                            return(
                            <Project key= {PROJECT.id} project={PROJECT}/>
                            );
                    })
                    }
                </div>
            </div>
        )
    }
} 

export default Projects;