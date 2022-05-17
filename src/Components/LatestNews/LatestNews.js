import axios from 'axios'
import React, {useContext, useEffect } from 'react'
import { Section } from './style'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import NewsItem from '../NewsItem/NewsItem'
import ShowMore from '../Buttons/ShowMore';
import {dataContext} from '../../App'

function LatestNews() {
  const{data, setData} = useContext(dataContext)
  useEffect(()=>{
    const getNewsListing = async()=>{
      try{
        const res = await axios.get('https://api.npoint.io/96363b7b60639fdd6e7d')
          const news = res.data.News
          const newsSorting = news.sort((a,b)=>{
            return new Date(b.published) - new Date(a.published);
          })
          setData(newsSorting)
      }catch(error){
         console.log(error)
      }
        
    }
    getNewsListing()
  },[])

  return (
    <Section>
     
      <div className='row g-0'>
          <div className='side-left col-2' style={{backgroundImage:`url("images/latest-news.jpg")`}}>
            <h3>Latest News</h3>
          </div>
          <div className='container col-10 py-5 px-4'>
         <ShowMore color={'#adaaaa'} page={'/news-listing'}/>

              <OwlCarousel items={4}  
                  className="owl-theme mt-3 row"  
                  nav  
                  margin={8}
                  dots={false}
                  >

              {data && data.map(list =>(
                <NewsItem key={list.id} id={list.id} title={list.title} imgURL={list.urlToImage} date={list.published}/>
              ))}
              </OwlCarousel>

          </div>
      </div>

    </Section>
   
  )
}

export default LatestNews