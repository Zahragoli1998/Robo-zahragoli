import React,{Component} from 'react';
import Cardlist from './Cardlist';
//import { Robotlist } from './Robotlist';
import Searchbox from './Searchbox';
import './App.css';
import './style.css';



class App extends Component{
    constructor(){
        super()
        this.state={
            Robotlist:[],
            searchfield : ''
        }

    }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users=> this.setState({Robotlist:users}));
    }

    onSearchChange=e=>{
        this.setState({searchfield:e.target.value}) 
      }
    
    render(){
     
     
      const filterrobot=this.state.Robotlist.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return ( !this.state.Robotlist.length)?
     (<h2>loading</h2>):
     (
    <div>
      <h1 className="title">robo-friends</h1> 
      <Searchbox
      
      SearchChange={this.onSearchChange}
     />
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
      <Cardlist Robotlist={filterrobot} />
    </div>);
}}

export default App;