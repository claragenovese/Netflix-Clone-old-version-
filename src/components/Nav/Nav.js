import React, { useState, useEffect, useContext } from 'react'
import NetflixLogo from './NetflixLogo/NetflixLogo'
import NavMenu from './NavMenu/NavMenu'
import Login from './Login/Login'
import { Context } from '../../Context/Context'

export default function Nav() {
  const{viewportWidth} = useContext(Context)
  const [isScroll, setIsScroll] = useState(false)

  function changeNavBackground(){
    if(window.scrollY > 10) setIsScroll(true)
    else setIsScroll(false)
  }

  window.addEventListener('scroll', changeNavBackground)

  return (
    <div className={isScroll ? 'nav-container scroll' : 'nav-container'}>
      <NetflixLogo viewportWidth={viewportWidth}/>
      <NavMenu viewportWidth={viewportWidth}/>
      <Login />
    </div>
  )
}
