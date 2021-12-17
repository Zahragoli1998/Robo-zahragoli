import React from 'react';

 const Searchbox =({Searchfield,SearchChange}) =>{
     return(
     <div>
     <input 
     className='inputsearch'
     type='search' 
     placeholder=' Search here ......'  
     onChange={SearchChange} />
     {/* <p>kkkkkkk</p> */}
     </div>
     );
 }
 export default Searchbox;