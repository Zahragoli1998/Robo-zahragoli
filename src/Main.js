import React, { Component} from 'react';
import Cardlist from './component/Cardlist';
import Searchbox from './component/Searchbox';
import './component/App.css';
import './style.css';
import Mymap from './component/Mymap';
import "leaflet/dist/leaflet.css";
import {Link} from 'react-router-dom';



class App extends Component {
  constructor() {
    super()
    this.state = {
      Robotlist: [],
      searchfield: '',
      isModalDisplayed: false,
      InformationRobot :{},
    
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({
        Robotlist: users
      }));
  }

  onSearchChange = e => {
    this.setState({
      searchfield: e.target.value
      
    })
  }

  render() {

    const showModal = (robot) => {
        const InformationRobot = JSON.parse(JSON.stringify(robot));
        this.setState({isModalDisplayed: true,InformationRobot});
    }
    
    const hideModal = () => {
      this.setState({isModalDisplayed: false})
    }

    const filterrobot = this.state.Robotlist.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <>
        {
          !this.state.Robotlist.length
          ?
          <h2>loading</h2>
          :
          <div style={{position: 'relative'}} >
            {
              this.state.isModalDisplayed
              ?
              <>
              <div className='backdrop' onClick={()=>hideModal()}></div>
              <div className='modal'  >
                 <Mymap
                 robot={this.state.InformationRobot}
                 />
                 <Link to={`/single/${this.state.InformationRobot.id}`}>
                <button style={{width: 600,
                  height: 50,
                  position:'absolute',
                  bottom:0,
                  backgroundColor:'lightgreen'}}>click me</button>
                 </Link>
              </div>
              </>
              :
              null
            }

            <h1 className="title">robo-friends</h1> 
            <Searchbox
              SearchChange={this.onSearchChange}
            />
            <Cardlist Robotlist={filterrobot} showModal={showModal} />
          </div>
        }
      </>
    )
  }
}

export default App;