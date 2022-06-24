import React, {  useState, useEffect, useContext } from "react";
import axios from "axios";
import allUrlsObject from "../api/apiRequests";
import useFetch from "../hooks/useFetch";

const Context = React.createContext()
    
export function useListContext(){
    const {savedMovies, addToMyList, removeFromList} = useContext(Context)
    const object = {savedMovies, addToMyList, removeFromList}
    return object
}

function ContextProvider({children}){

    const [isLoading, setIsLoading] = useState(true)
    const [moviesCategoriesArr, setMoviesCategoriesArr] = useState([])
    const [tvCategoriesArr, setTvCategoriesArr] = useState([])
    const [error, setError] = useState(null)

    const [newMovieClicked, setNewMovieClicked] = useState(null)

    const [savedMovies, setSavedMovies] = useState([])

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

    function actualizeMovieClicked(movieClicked) {
        setNewMovieClicked(movieClicked)
    }

    function removeMovieClicked(){
        setTimeout(()=> { //await the  close animation finish
            setNewMovieClicked(null)
        },[500])
    }
    
    function addToMyList(item){
        const newMovie ={
            title: item.name ?? item.title,
            backdrop_path: item.poster_path
        }
        setSavedMovies(prevArray => ([...prevArray, newMovie]))
    }

    function removeFromList(item){
        let oldArray = savedMovies
        const newArray = oldArray.filter(movie => movie.title !== item.title) 
        setSavedMovies(newArray)
    }

    useEffect(() => {

        async function requestApiData(urlsArray){
            let arr = []
            for(let i = 0 ; i < urlsArray.length ; i++){
                const data = await axios.get(urlsArray[i].url)
                arr.push({category: urlsArray[i].category, data: data.data.results, type: urlsArray[i].type})
            }
            return arr
        }

        async function callApiAndUpdateData(){
            setIsLoading(true)
            const moviesUrlsArray = allUrlsObject.movies
            const tvUrlsArray = allUrlsObject.tvShows
            try{
                const moviesData = await requestApiData(moviesUrlsArray)
                setMoviesCategoriesArr(moviesData)
                const tvShowsData = await requestApiData(tvUrlsArray)
                setTvCategoriesArr(tvShowsData)
            }
            catch(err){
                setError(err)
            }
            finally{
                setIsLoading(false)
            }
        }

        callApiAndUpdateData()
    }, [])

    return(
        <Context.Provider value={
            {isLoading, 
            moviesCategoriesArr, 
            tvCategoriesArr, 
            savedMovies, addToMyList, removeFromList, 
            newMovieClicked, actualizeMovieClicked, removeMovieClicked,
            viewportWidth}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}