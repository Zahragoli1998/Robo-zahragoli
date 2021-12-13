import React,{Component} from "react";
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet';
import { Robotlist } from './Robotlist';


const  Mymap = ({Robotlist}) => {
    const geo = Robotlist[0].geo;
    return(
       
          <MapContainer center={geo} zoom={10} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={geo}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        
  
    );
}
export default Mymap;