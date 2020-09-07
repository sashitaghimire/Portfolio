import React,{Component} from 'react';
import Projects from './Projects';

class App extends Component{
    state ={displayBio: false};

    toggleDisplayBio =() =>{
        this.setState({displayBio:!this.state.displayBio});
    }
    render(){
        return(
            <div>
                <h1>hello!!</h1>
                <p>i am sashita.</p>
                <p>i am a software engineer</p>
                {this.state.displayBio ? (
            <div>
                <p>I live in kathmandu , and code almost everyday</p>
                <p>My favorite language is javascript, dart</p>
                <p>Beside coding i love to read books and cook.</p>
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
            </div>
        )
    }

}
export default App;