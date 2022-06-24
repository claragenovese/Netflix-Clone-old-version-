import React, { useContext } from 'react'
import Main from '../components/Main/Main'
import Titles from '../components/Titles/Titles'
import { Context } from '../Context/Context'

export default function Series() {

  const { moviesCategoriesArr} = useContext(Context)

  return (
    <>
      <Main render={moviesCategoriesArr}/>
      <Titles render={moviesCategoriesArr}/>
    </>
  )
}
