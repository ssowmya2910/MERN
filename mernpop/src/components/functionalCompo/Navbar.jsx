import React from 'react'
import '../style/Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {
  const[isOpen,setOpen]=useState(false);
  const[dropdown,showDropdown]=useState(false);
  return (
   <header>
    <nav className='link'>
        <li ><Link to='/' className='link'>Home</Link></li>
        <li className='link'> <Link to='/about' className='link'>About</Link></li>
        <li className='link'><Link to='/gallery' className='link'>Gallery</Link></li>
        <li className='link'><Link to='/contact' className='link'>Contact</Link></li>
        <li className='link'><Link to='/signup'className='link'>Signup</Link></li>
        <li className='link'><Link to='/res'className='link'>ContextAPI</Link></li>

        <li className="dropdown" onMouseEnter={()=>setOpen(!isOpen)} onMouseLeave={() => setOpen(!isOpen)}>
          <span>Hooks</span>
            {isOpen && (
              <ol className="dropdown1">
                <li className='link'>
                  <Link to="/use-state" className='link'>UseState</Link>
                </li>
                <li className='link'>
                  <Link to="/use-effect" className='link'>UseEffect</Link>
                </li>
                <li className='link'>
                  <Link to="/use-effect-api" className='link'>UseEffectAPI</Link>
                </li>
                <li className='link'>
                  <Link to="/use-ref" className='link'>UseRef</Link>
                </li>
                <li className='link'>
                  <Link to="/use-memo" className='link'>UseMemo</Link>
                </li>
                <li className='link'>
                  <Link to="/use-memoize" className='link'>UseMemoize</Link>
                </li>

                </ol>
              
            )}
         
          </li>
          <li className='link'><Link to='/hoc'className='link'>HoC</Link></li>
          <div
          className="dropdown"
          onMouseEnter={() => showDropdown(!dropdown)}
          onMouseLeave={() => showDropdown(!dropdown)}
        >
          <span className="link">Memoization</span>

            {dropdown && (
              <ol className="dropdown-list">
              <li>
                <Link to="/memo" className="dropdown-link">
                  Memo
                </Link>
              </li>
              <li>
                <Link to="/lazy" className="dropdown-link">
                  Lazy Component
                </Link>
              </li>
              </ol>
            )}

        </div>

    </nav>
   </header>
  )
}

export default Navbar