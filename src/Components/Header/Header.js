import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAdjust, faSearch, faBarsStaggered, faTimes} from '@fortawesome/free-solid-svg-icons'
import { Logo, LogoImag, NavBar, Section, ColorControll, Button } from './style'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'

function Header() {

  const [active, setActive] = useState(false)


  return (
    <>
    <Section className='main-header'>
      <div className='row g-0'>
           <Logo className='logo side-left col-2 text-end'>
              <Link to='/'><LogoImag src='/link-logo.png' alt="logo"/></Link>
            </Logo>
            <div className='container px-4 col-10 d-flex justify-content-end'>
           
           <div style={{flexShrink:1}}>
           <NavBar id="navbar" className='d-flex h-100'>
             <ColorControll className='item'>
                 <FontAwesomeIcon icon={faAdjust} style={styles.icon} />
             </ColorControll>
             <div className='item'> 
               <FontAwesomeIcon className='me-2' icon={faSearch} style={styles.icon} />
               <div className='mx-2 lang'>
                 <span>EN</span>
               </div>
               <Button className='rounded-pill mx-2'>
                 Sign In
               </Button>
             </div>
             <div className='item ms-2'>
              <FontAwesomeIcon icon={active? faTimes :faBarsStaggered} style={styles.icon} onClick={()=>setActive(!active)} />
              </div>

           </NavBar>
           </div>
       </div>
      </div>

    </Section>
          <Menu active={active}/>
</>
  )
}
const styles = {
  icon:{
    color:'#FFF'
  }
}
export default Header