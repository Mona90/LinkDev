import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons'
import { Section } from './style'

function Menu({active}) {

  return (
    <>
    {active ?  (
        <Section>
        <div className='row h-100 g-0'>
            <div className='side-left col-2'></div>
            <div className='container col-10 py-5 px-4'>
                <div className='row mb-5 justify-content-between'>
                    <ul className='column col-4 list-unstyled'>
                        <li>Why invest</li>
                        <li>industries</li>
                        <li>programs & incentives</li>
                        <li>locations</li>
                        <li><Link to='/news-listing'>news</Link> </li>
                        <li>about</li>
                     </ul>
                     <ul className='column col-4 list-unstyled'>
                        <li className='d-flex justify-content-start align-items-end h-100' style={{marginTop:'40px'}}>
                            <p className='me-5 mb-0'>Follow us</p>
                            <div>
                            <FontAwesomeIcon className='me-2' icon={faFacebookF} />
                            <FontAwesomeIcon className='me-2' icon={faTwitter} />
                            <FontAwesomeIcon icon={faYoutube} />

                                
                            </div>
                        </li>
                     </ul>
                     
                </div>
                <div className='company-rights d-flex justify-content-between mt-4 pt-2'>
                        <Link to='/' className='privacy-terms'><small>Privacy Policy | Terms of Use</small></Link>
                        <p className='copy-right'><small>&copy;2022 linkdevelopment sub from a15</small></p>
                </div>
            </div>
        </div>
    </Section>
    
    )
    :
    null
}
        
    </>
  )
}

export default Menu