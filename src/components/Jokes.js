import React,{Component} from 'react'
import { render } from 'react-dom';


class Jokes extends Component {
    state= { joke:{} };

    componentDidMount (){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response=>
            response.json())
            .then(json => this.setState({joke:json}));
        }
        render(){
            const {setup, punchline} = this.state.joke;
            return(

            <div>
                <h1>Highlighted Jokes</h1>
                <p>{setup}<em>{punchline}</em></p>
            </div>
            )
    }
}
export default Jokes;