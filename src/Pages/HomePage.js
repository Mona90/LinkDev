import React from 'react'
import LatestNews from '../Components/LatestNews/LatestNews'
import Opportunities from '../Components/Opportunities/Opportunities'
import TopSection from '../Components/TopSection/TopSection'
import Footer from '../Components/Footer/Footer'

function HomePage(props) {
  console.log('testtttt', props.path)

  return (
    <>
    <TopSection/>
    <Opportunities/>
    <LatestNews/>
    <Footer/>
    </>
  )
}

export default HomePage