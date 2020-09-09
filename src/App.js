import React,{Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';


class App extends Component{
    state ={displayBio: false};

    toggleDisplayBio =() =>{
        this.setState({displayBio:!this.state.displayBio});
    }
    render(){
        return(
            <div >
                <title>Portifolio</title>
                <img src ={profile} alt="profile" className="profile"/>
                <h1>Hello!</h1>
                <p>I am Sashita.</p>
                <p>I am a Software Developer.</p>
                {this.state.displayBio ? (
            <div>
                <p>I live in kathmandu, and code almost everyday</p>
                <p></p>
                <p>Beside coding I love to read books and cook.</p>
                <button onClick={this.toggleDisplayBio}>Show Less</button>
            </div>
        ) : (
            <div>
                <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
        )
        }
        <hr />
        <Projects />
        <hr />

        <SocialProfiles />
            </div>
        )
    }

}
export default App;