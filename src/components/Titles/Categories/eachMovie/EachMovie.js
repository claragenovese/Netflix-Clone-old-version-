import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Context } from '../../../../Context/Context'

const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"

function EachMovie(props){

  const item = props.item

  const {viewportWidth} = useContext(Context)

  const {actualizeMovieClicked} = useContext(Context)

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
      <div className='img-container'>
        <img 
          className='movie-img' 
          src={`${BASE_IMG_URL}${viewportWidth > 680 ?  item.backdrop_path : item.poster_path}`} 
        />
      </div>
    )
  }

  return(
    <motion.div 
      className={props.position && 'movie-container'} 
      initial={{ opacity: 0 }}
      animate={{opacity: 1}}
      transition={{ ease: "easeOut", duration: 0.6, delay: 0.2 }}
      onClick={() => actualizeMovieClicked(item)}
    >
      {props.position ? displayPopularMovies() : displayMovies()}
    </motion.div>
  )
}

export default React.memo(EachMovie)




