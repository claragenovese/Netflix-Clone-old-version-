import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {IoIosPlay} from 'react-icons/io'
import {motion} from 'framer-motion'

export default function NavMenu({viewportWidth}) {
  const [isMenuDisplay, setIsMenuDisplay] = useState(false)
 
  return (
    <div className='nav-menu'>
      {
        viewportWidth < 780 &&
        <div 
          className='collapse-container'
          onClick={()=>setIsMenuDisplay(prev => !prev)} 
        >
          <h2>Browse
          <span>
            <IoIosPlay className='collapse-icon'/>
          </span></h2>
        </div>
      }
      <ul 
        className={ isMenuDisplay ? 'nav-ul display-collapse-menu' : 'nav-ul'}
      >
        <li className='nav-li'><Link to="/">Home</Link></li>
        <li className='nav-li'><Link to="/shows">Series</Link></li> 
        <li className='nav-li'><Link to="/movies">Movies</Link></li>   
        <li className='nav-li'><Link to="/my_list">My List</Link></li>
      </ul>
    </div>
  )
}

// When refactoring i can map this