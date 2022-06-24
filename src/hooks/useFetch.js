import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(requestArray){
    const [array, setArray] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    // useEffect(() =>{
    //     async function getFetchData(){
    //         setIsLoading(true)
    //         try{
    //             const data = await axios.get(url)
    //             setData(data.data.results)
    //         }
    //         catch(err){
    //             setError(err.message)
    //         }
    //         finally{
    //             setIsLoading(false)
    //         }
    //     }

    //     getFetchData()

    // }, [url])


    useEffect(() => {
        async function getApi(){
            setIsLoading(true)
            let arr = []
            for(let i = 0 ; i < requestArray.length ; i++){
                const data = await axios.get(requestArray[i].url)
                arr.push({category: requestArray[i].category, data: data.data.results})
            }
            return arr
        }
        async function nose(){
            try{
                const allData = await getApi()
                setArray(allData)
            }
            catch(err){
                setError(err)
            }
            finally{
                setIsLoading(false)
            }
            
        }
        nose()
        
      
    }, [])



    // async function createDataArray(dataContainer){
    //     let i = 0
    //     const amountOfCategories = requestArray.length

    //     for( i ; i < amountOfCategories ; i++){
    //         const categoryUrl = requestArray[i].url

    //         const data = await axios.get(categoryUrl)

    //         const category = requestArray[i].category
    //         const fetchData = data.data.results

    //         dataContainer.push({category, fetchData})
    //     }
    //     return dataContainer
    // }

    // useEffect(() => {
    //     async function fetchData(){

    //         setIsLoading(true)

    //         let dataContainer = []

    //         dataContainer = createDataArray()
           
    //         return dataContainer
    //     }
    //     async function nose(){
    //         const allData = await getApi()
    //         setArray(allData)
    //     }
    //     nose()
    //     setIsLoading(false)
      
    // }, [])

    return { array, error, isLoading}
}

export default useFetch