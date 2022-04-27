import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import ItemDetails from '../Components/ItemDetails/ItemDetails'
import TopBanner from '../Components/TopBanner/TopBanner'

function NewsDetails() {
  const params = useParams()
  const paramsID = params.id
  
  return (
    <>
    <TopBanner/>
    <ItemDetails paramsID={paramsID}/>
    <Footer/>
    </>
  )
}

export default NewsDetails