import React, { useState, useEffect } from 'react'
import NetflixLogo from './NetflixLogo/NetflixLogo'
import NavMenu from './NavMenu/NavMenu'
// import SearchBar from './SearchBar/SearchBar'
import Login from './Login/Login'

export default function Nav() {
  const [isScroll, setIsScroll] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setViewportWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  function changeNavBackground(){
    if(window.scrollY > 80) setIsScroll(true)
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
