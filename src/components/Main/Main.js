import React from 'react'
import { BsTriangleFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"

function Main({render: elementArray}) {

    const popularElementData = elementArray[0].data

    const randomPosition = Math.floor(Math.random() * 10)
    const randomMovie = popularElementData[randomPosition]

 
    return (
        <main className='main-container'>
            <div className='main-background'>
                <img 
                    className='main-bkg-img'
                    src={`${BASE_IMG_URL}${randomMovie.backdrop_path}`} 
                    alt={randomMovie.title} />
            </div>
            <div className='main-content'>
                <h1 className='main-title'>{randomMovie.title  ?? randomMovie.name}</h1>
                <h3 className='position'>N° {randomPosition + 1} on today's movies</h3>
                <div className='main-btns'>
                    <button className='play-btn'><span><BsTriangleFill className='play-icon'/></span>Play</button>
                    <button className='info-btn'><span><AiOutlineInfoCircle className='info-icon' /></span>More Info</button>
                </div>
            </div>
            <div className='layers'>
                <div className='vertical'></div>
                <div className='horizontal'></div>
            </div>
        </main>
    )
}

export default React.memo(Main)