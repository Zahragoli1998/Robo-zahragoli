import React, { Component} from 'react';
import Cardlist from './component/Cardlist';
import Searchbox from './component/Searchbox';
import './component/App.css';
import './style.css';
import Mymap from './component/Mymap';
import "leaflet/dist/leaflet.css";



class App extends Component {
  constructor() {
    super()
    this.state = {
      Robotlist: [],
      searchfield: '',
      isModalDisplayed: false,
      positionRobot :{}
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
        const positionRobot = JSON.parse(JSON.stringify(robot.address.geo));
        console.log(positionRobot);
        this.setState({isModalDisplayed: true,positionRobot});
       
        
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
                <div className='btn'
                  style={{ width: '50px', padding: '4px 2px', position: 'absolute', top: 0, right: 0}} 
                  onClick={() => hideModal()} 
                >
                </div>
                <br />
                <br />
                 <Mymap
                 robot={this.state.positionRobot}/>
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