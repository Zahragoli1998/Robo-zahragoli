import React, {Component} from 'react';
import Mymap from './Mymap';
 
const Card = ({name,email,id}) =>{
  return (
    
    <button className='btn' onClick={Mymap}><div className='card'>
      <img alt='robots' src={`https://robohash.org/${id}?200*200`}/>
      <div>
        <h1 className='name'>{name}</h1>
        <p className='email'>{email}</p>
       
      </div>
    </div></button>
  );

}
export default Card;