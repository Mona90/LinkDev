import React from 'react'
import { Section } from './style'
import ShowMore from '../Buttons/ShowMore'

function Opportunities() {
  return (
    <Section style={{backgroundImage:`url("images/opportunity-bg.jpg")`}}>
        <div className='row g-0 h-100' style={{position:'relative', zIndex:3}}>
            <div className='side-left col-2'>
              <h3>Opportunities</h3>
            </div>
            <div className='container col-10 py-5 px-4'>
            <div className='row no-gutter'>
              <div className='column col-2 text-start'>
                <h5>Country</h5>
                <ul className='list-unstyled'>
                    <li>nigeria</li>
                    <li>Ethiopia</li>
                    <li>egypt</li>
                    <li>tanzania</li>
                    <li>kenya</li>
                    <li>uganda</li>
                    <li>algeria</li>
                    <li>sudan</li>
                </ul>
              </div>
              <div className='column col-3 text-start'>
                <h5>Sector</h5>
                <ul className='list-unstyled'>
                    <li>Real estate, Tourism</li>
                    <li>Agriculture, Healthtech</li>
                    <li>Real estate, Tourism</li>
                    <li>Fitness</li>
                    <li>Healthtech</li>
                    <li>Real estate</li>
                    <li>Agriculture, Healthtech</li>
                    <li>Tourism</li>
                  </ul>
              </div>
              <div className='column col-2 text-start'>
                  <h5>Opportunities</h5>
                  <ul className='list-unstyled'>
                      <li>446</li>
                      <li>557</li>
                      <li>226</li>
                      <li>287</li>
                      <li>227</li>
                      <li>27</li>
                      <li>775</li>
                  </ul>
                </div>
            </div>
            <ShowMore color={'#FFF'}/>
            </div>
            
        </div>
    </Section>
  )
}

export default Opportunities