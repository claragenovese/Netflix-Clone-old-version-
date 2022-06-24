import React, { useContext, useEffect, useMemo, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsPlayFill, BsCheckLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../../../../Context/AuthContext'
import { Context } from '../../../../Context/Context'

const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"

function EachMovie(props){

  const item = props.item

  const [isHovered, setIsHovered] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [saveProve, setSaveProve] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const {addToMyList, removeFromList, actualizeMovieClicked} = useContext(Context)
  const {user} = useAuth()

  function saveMovie(){
    if(user?.email) {
      setIsSaved(prev => !prev)
      addToMyList(item)
    }else{
      alert("Please, log in to save movie")
    }
  }

  function removeMovie(){
    setIsSaved(false)
    removeFromList(item)
  }
  

  function displayPopularMovies(){
    return(
      <div className='popular-movie-card'>
        { window.innerWidth > 780 && props.position }
        <img className='movie-img' src={`${BASE_IMG_URL}${item.poster_path}`} />
      </div>
    )
  }


  function displayMovies(){
    return(
      <img 
        className='movie-img' 
        src={`${BASE_IMG_URL}${item.backdrop_path}`} 
      />
    )
  }

  function getContainerClass(){
    if(isHovered) return 'hover-movie display'
    return 'hover-movie'
  }

  function onHoverMovie(){
    return(
      <div className={getContainerClass()} >
        <img className='movie-img' src={`${BASE_IMG_URL}${item.backdrop_path}`} />
        <div className='hover-info-container'>
          <div className='hover-icons-container'>
            <div className='plus-icon'>
                {isSaved ? 
                <BsCheckLg 
                  className='icon save'
                  onClick={removeMovie}
                /> : 
                <AiOutlinePlus 
                  className='icon'
                  onClick={saveMovie}
                />
              }
            </div>
            <Link to="watchMovie"><div className='info-icon'> 
                <BsPlayFill className='icon play'/>
            </div></Link> 
          </div>
          <h2 className='hover-title'>{item.title ?? item.name}</h2>
        </div>
      </div>
    )
  }


  return(
    <motion.div 
      className={props.position && 'movie-container'} 
      
      initial={{ opacity: 0 }}
      animate={{opacity: 1}}
      transition={{ ease: "easeOut", duration: 0.6, delay: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => actualizeMovieClicked(item)}
    >
      {props.position ? displayPopularMovies() : displayMovies()}
      {/* {onHoverMovie()} */}
    </motion.div>
  )
}

export default React.memo(EachMovie)




