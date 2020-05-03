import React from 'react';
import InputBox from './InputBox';
import Button from './Button';



const NavBar = (props) => {
  return ( 

    <div className="NavBar text-center">
    <h2>HabteJ Weather App</h2>
    <form onSubmit={props.changeText}>
        <InputBox type='text' name='city'/>
        <Button type='submit'>Search</Button>
        
      </form>
      </div>
   );
}
 
export default NavBar;