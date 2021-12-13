
import React from 'react';
import Card from './Card';

const Cardlist = ({Robotlist}) => {
   
    return(
        <div className='box'>
        {
        Robotlist.map((item,i) =>
        {
        return (
        <Card 
        key={i} 
        id={Robotlist[i].id} 
        name={Robotlist[i].name} 
        email={Robotlist[i].email}
        />
        );
      })
     }
        </div> 
    );
} 
export default Cardlist;