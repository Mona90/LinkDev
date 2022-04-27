import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NewsItem from '../Components/NewsItem/NewsItem'
import TopBanner from '../Components/TopBanner/TopBanner'
import CustomFooter from '../Components/Footer/CustomFooter'
import ShowMore from '../Components/Buttons/ShowMore'


function NewsListing() {
  
  const [lists, setLists] = useState([])
  useEffect(()=>{
    const getNewsListing = async()=>{
      try{
        const res = await axios.get('https://api.npoint.io/96363b7b60639fdd6e7d')
          setLists((res.data.News).slice(0,6))
        }catch(error){
        console.log(error)
      }
    }
    getNewsListing()
  },[])

  return (
    <>
        <TopBanner />

        <div className='py-5'>
            <div className='container text-center'>
                  <div className='row justify-content-evenly'>

                    {lists&& lists.map(list =>(
                      <NewsItem class={'col-4'}  key={list.id} id={list.id} title={list.title} imgURL={list.urlToImage} date={list.published} marginBottom={'40px'}/>
                    ))}
                  </div>
                  <div className='d-flex justify-content-center'>
                      <ShowMore color={'#CCC'} />
                  </div>
            </div>
        </div>
        <CustomFooter/>
    </>
  )
}

export default NewsListing