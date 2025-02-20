import React from 'react'
import '../style/Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {
  const[isOpen,setOpen]=useState(false);
  return (
   <header>
    <nav>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
        <li className="dropdown" onMouseEnter={()=>setOpen(!isOpen)} onMouseLeave={() => setOpen(!isOpen)}>
          <span>Hooks</span>
            {isOpen && (
              <ol className="dropdown1">
                <li>
                  <Link to="/use-state">UseState</Link>
                </li>
                <li>
                  <Link to="/use-effect">UseEffect</Link>
                </li>
                <li>
                  <Link to="/use-effect-api">UseEffectAPI</Link>
                </li>
                <li>
                  <Link to="/use-ref">UseRef</Link>
                </li>
                <li>
                  <Link to="/use-memo">UseMemo</Link>
                </li>
              </ol>
            )}
          </li>
    </nav>
   </header>
  )
}

export default Navbar