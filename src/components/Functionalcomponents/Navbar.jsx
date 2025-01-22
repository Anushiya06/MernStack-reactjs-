import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../../css/Nav.css";

const Navbar = () => {
  var [dropdown,showdropdown]= useState(false)
    const toggledropdown=()=>{
      showdropdown((dropdown)=>!dropdown);
    };
 var styling={textDecoration:"underline",
  color:"blue",
  listStyletype:"none",
  textalign:"center",
 }
  return (
    <header>
    <nav>
      <ol>
        <li><Link to='/' className="link">Home</Link></li>
        <li><Link to='/about' className="link">About</Link></li>
        <li><Link to='/gallery' className="link">Gallery</Link></li>
        <li><Link to='/contact'className="link">Contact</Link></li>
        <div>
        <span onMouseEnter ={toggledropdown}>
          Hooks 
         </span>
         {dropdown && (
             <ul> 
            <li><Link to="usestate" target='_blank' className='link'>useState</Link></li>
            <li>
              <Link to="useeffect" className='link'>UseEffect</Link>
            </li>
            <li>
              <Link to="useapi" className='link'>UseEffectAPI</Link>
            </li>
          </ul>)}
        </div>
        <li><Link to='/signup' className="link">Signup</Link></li>
      </ol>
    </nav>
    </header>
  )
}

export default Navbar
