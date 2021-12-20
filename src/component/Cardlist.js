
import React from 'react';
import Card from './Card';

const Cardlist = ({Robotlist, showModal}) => {
    if (Robotlist.length === 0){
     return (
        <div className="result">
            <h1>no result :(</h1>
        </div>) 
        }
        else{
       return(
        <div className='box'>
        {
        Robotlist.map((item,i) =>
        {
        return (
        <>
        <div key={i}>
        <Card 
            id={Robotlist[i].id} 
            name={Robotlist[i].name} 
            email={Robotlist[i].email}
            showModal={showModal}
            robot={Robotlist[i]}
        />
        </div>
        </>
        );
      })
     }
        </div> 
    );}
} 
export default Cardlist;