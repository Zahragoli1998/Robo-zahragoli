import { render } from '@testing-library/react';
import React, {Component} from 'react';
 
const Card = ({name,email,id}) =>{
  return (
    
    <div className='card'>
      <img alt='robots' src={`https://robohash.org/${id}?200*200`}/>
      <div>
        <h1 className='name'>{name}</h1>
        <p className='email'>{email}</p>
      </div>
    </div>
  );

}
export default Card;