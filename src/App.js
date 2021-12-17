import React, { Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import './App.css';
import './style.css';
import Mymap from './Mymap';
import "leaflet/dist/leaflet.css";



class App extends Component {
  constructor() {
    super()
    this.state = {
      Robotlist: [],
      searchfield: '',
      isModalDisplayed: false,
      positionRobot :[]
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
        const positionRobots = Object.values(JSON.parse(JSON.stringify(robot.address.geo)));
        console.log(positionRobots);
        this.setState({isModalDisplayed: true,positionRobot:[...positionRobots]});
        //this.setState({positionRobot:[...positionRobots]});
        
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
              <div className='modal' >
                <div 
                  style={{background: 'gray', width: '100px', padding: '4px 2px', position: 'absolute', top: 0, right: 0}} 
                  onClick={() => hideModal()} 
                > 
                    close modal 
                </div>
                <br />
                <br />
                 <Mymap
                 robot={this.state.positionRobot}/>
              </div>
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