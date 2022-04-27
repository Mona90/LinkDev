import React from 'react'
import { Section } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <Section>
        <div className='row g-0'>
            <div className='side-left col-2'></div>
            <div className='container col-10 py-5 px-4'>
                <div className='row'>
                    <ul className='column col-4 list-unstyled'>
                        <li>Why invest</li>
                        <li>industries</li>
                        <li>programs & incentives</li>
                        <li>locations</li>
                        <li>news</li>
                        <li>about</li>
                     </ul>
                     <ul className='column col-4 list-unstyled'>
                        <li>Contact us</li>
                        <li>mail@linkdevelopment.com</li>
                        <li>+02-12-14490877</li>
                        <li>please drop an email or call us, our representative will connect with you soon</li>
                        <li className='d-flex justify-content-start' style={{marginTop:'40px'}}>
                            <p className='me-5'>Follow us</p>
                            <div>
                            <FontAwesomeIcon className='me-2' icon={faFacebookF} />
                            <FontAwesomeIcon className='me-2' icon={faTwitter} />
                            <FontAwesomeIcon icon={faYoutube} />

                                
                            </div>
                        </li>
                     </ul>
                     <div className='news-letter col-4 d-flex flex-column'>
                        <p>Subscribe to our newsletter</p>
                        <input type='text' placeholder='E-mail'/>
                        <button>Send</button>
                        <p className='copy-right'>&copy;2022 linkdevelopment sub from a15</p>
                     </div>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Footer