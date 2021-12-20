import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import VenueLocationIcon from './VenueLocationIcon'
import "leaflet/dist/leaflet.css";
import "./App.css";


const  Mymap = (robot) => {
  console.log(robot);
    const position = robot.robot.address.geo;
    console.log(position);
    return(
      <div className="map" style={{position: 'absolute'}}>

      <div className="mapcontainer">
        
        <MapContainer center = {position} zoom={3} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker  position={position} icon={VenueLocationIcon}>
          <Popup><>
        
          <div>
            <img alt='robots' src={`https://robohash.org/${robot.robot.id}?100*100`} 
            style={{ width: 70,height: 70 }}/> 
            <h3>{robot.robot.name}</h3>
            <h6>{robot.robot.email}</h6>
            </div>
          
          </> </Popup>
        </Marker>
            
      </MapContainer>
          {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}  style={{ height: "100vh" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
         
        </MapContainer> */}
          </div>
          </div>
        
     );  
}
    
    
export default Mymap;
