import React,{Component,useEffect,useState} from "react";
import {useParams} from 'react-router-dom';
import Card from "./component/Card";

// class SingleRobot extends Component{
//   constructor(){
//     super()
//     this.state={
//       Robot:[]
//     }
//   }
//   componentDidMount(){
//     let {id} = useParams();
//     console.log({id});
//     this.fetchdata(id);
//     console.log(id);
//   }

//    fetchdata=(id)=>{
//      console.log(id);
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then(response => response.json())
//     .then(users => this.setState({Robot:users}));
//     console.log(this.state.users);
//    }

 
//   render(){
//     return(
//      <div>
//        {/* <Card
//        name={this.state.Robot.name}
//        email={this.state.Robot.email}
//        id={this.state.Robot.id}
//        /> */}
//       <div className='card' style={{ width:250,height:400}} >
//         <img alt='robots' src={`https://robohash.org/${this.state.Robot.id}?200*200`}/>
//         <div>
//           <h1 className='name'>{this.state.Robot.name}</h1>
//           <p className='email'>{this.state.Robot.email}</p>
//         </div>
//       </div>
//      </div>
//     )
//   }
// }
// export default SingleRobot;

export default function SingleRobot() {
  const [robot, setrobot] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setrobot(data);
      })
      })
   return(
  <div> 
      <div className='card' style={{ width:300,height:400}} >
        <img alt='robots' src={`https://robohash.org/${robot.id}?200*200`}/>
        <div>
          <h1 className='name'>{robot.name}</h1>
          <p className='email'>{robot.email}</p>
        </div>
      </div>
  </div>
  )
}