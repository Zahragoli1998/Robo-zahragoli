import React,{useState} from 'react';
//import Mymap from './Mymap';
// import Modal from './Model';
 
const Card = ({name,email,id, showModal,robot}) =>{
  const robots = JSON.parse(JSON.stringify(robot));  
  return (
    <div onClick={() => showModal(robots)}  >
        
        <div className='card'>
        <img alt='robots' src={`https://robohash.org/${id}?200*200`}/>
        <div>
          <h1 className='name'>{name}</h1>
          <p className='email'>{email}</p>
        </div>
    </div>
    {/* {show && <Modal/>} */}
    </div>
  );

}
export default Card;