import React, { useContext } from 'react'
import Main from '../components/Main/Main'
import Titles from '../components/Titles/Titles'
import { Context } from '../Context/Context'

export default function Series() {

  const { tvCategoriesArr} = useContext(Context)

  return (
    <>
      <Main render={tvCategoriesArr}/>
      <Titles render={tvCategoriesArr}/>
    </>
  )
}
