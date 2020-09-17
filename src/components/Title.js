import React,{Component} from 'react';



const TITLES  =[
    'a programmer',
    'a quick learner',
    'a adventure seeker',
    'a music lover',
];



class Title extends Component{
    componentDidMount(){
       this.timeout= setTimeout(()=>this.setState({fadeIn:false}),2000);
        this.animateTitles();
    }
    
    componentWillUnmount(){
       
        clearInterval(this.titleInetrval);
        clearTimeout(this.timeout);
    }


    animateTitles = ()=>{
        this.titleInetrval =setInterval(()=>{
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
    
            this.setState({titleIndex,fadeIn:true});
            this.timeout = setTimeout(()=>this.setState({fadeIn:false}),2000)
        }, 4000);
       
    }
    state = {titleIndex:0, fadeIn:true};
    render(){
        const {fadeIn ,titleIndex} = this.state;

        const title =TITLES[titleIndex];
    return(
    <p className={fadeIn ? 'tile-fade-in' :'title-fade-out'}>I am {title}</p>
    )
    }
}

export default Title;
