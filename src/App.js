import React,{Component} from "react";
import { BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import Main from './Main';
import SingleRobot from "./SingleRobot";
class App extends Component{
  constructor(){
    super()
    this.state={}
  }
  render(){
    return(
     <div>
       <Router>
          <Routes>
          <Route path={'/'} element={<Main/>}></Route>
          <Route path={'/single/:id'} element={<SingleRobot/>}></Route>
        </Routes>
       </Router>
     </div>
    )
  }
}
export default App;