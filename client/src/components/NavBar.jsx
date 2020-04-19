import React from 'react';
const NavBar = (props) => {
    return ( 
    <header>
    {props.children}
    </header> );
}
 
export default NavBar;