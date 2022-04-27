import React from 'react'
import Header from '../Header/Header'
import { Content, Section, Investment} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import ShowMore from '../Buttons/ShowMore'
import Slides from '../Slides/Slides'

function TopSection() {

  return (
    <Section style={{backgroundImage:`url('images/banar.png')`}}>
        <Header/>
        <Content className='h-100 row g-0'>
          <div className='side-left col-2'></div>
          <div className='container col-10'>
            <div className='p-5 text-start' style={{marginTop:'30px',marginLeft:'20px'}}>
             <Slides/>
              
            </div>
          </div>
          
        </Content>
        <Investment className='investment d-flex'>
                  <div className='info'>
                    <h6 className='title'>Recent Investment announcements</h6>
                    <p>Navigating the opportunites Of Africa's logistics sector</p>
                    <Link to='#' className='more-link'>
                      <span>More</span>
                      <FontAwesomeIcon icon={faArrowRight} style={{color: '#b27208'}}/>
                    </Link>
                  </div>
                  <div className='investment-sector'>
                    <div className='d-flex justify-content-between'>
                      <h6 className='title'>investment sector</h6>
                      <ShowMore color={'#FFF'}/>

                    </div>
                      <ul className='sectors list-unstyled d-flex justify-content-between'>
                        <li>
                          <img src='images/travel.svg' alt=''/>
                          <p>Tourism</p>
                        </li>
                        <li>
                          <img src='images/tree-solid.svg' alt=''/>
                          <p>Agriculture</p>
                        </li>
                        <li>
                          <img src='images/house.svg' alt=''/>
                          <p>Real State</p>
                        </li>
                        <li>
                          <img src='images/Industrials.png' alt=''/>
                          <p>Industrials</p>
                        </li>
                        <li>
                          <img src='images/lightning-fill.svg' alt=''/>
                          <p>Energy</p>
                        </li>
                        <li>
                          <img src='images/heartbeat.svg' alt=''/>
                          <p>Healthcare</p>
                        </li>
                      </ul>
                  </div>
        </Investment>
    </Section>
  )
}

export default TopSection