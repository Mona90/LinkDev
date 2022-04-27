import React from 'react'
import Header from '../Header/Header'
import { Top } from './style'

function TopBanner() {
  return (
    <Top style={{backgroundImage:`url("images/top-banner.jpg")`}}>
        <Header/>
        <div className='banner-content py-5'>
          <div className='container d-flex justify-content-between'>
              <h4>News</h4>
              <div className='filter d-flex flex-column'>
                <label className='mb-2'>Filter by:</label>
                <div className='inputs d-flex '>
                    <div className='input-group '>
                        <input className='rounded-pill' type="text" placeholder='From Date'/>
                    </div>
                    <div className='input-group'>
                       <input className='rounded-pill' type='text' placeholder='To Date' />
                    </div>
                    <div className='input-group'>
                       <input className='rounded-pill' type='text' placeholder="Keyword..."/>
                    </div>
                </div>
              </div>
          </div>
        </div>
    </Top>
  )
}

export default TopBanner