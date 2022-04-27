import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './showMore.css'
function ShowMore(props) {

  return (
    <>
        <Link to={props.page? props.page : '/'} className='show-more d-flex mt-3' style={{color:`${props.color}`}}>
            <span>More</span>
            <span className='arrow-icon ms-1' style={{borderColor:`${props.color}`}}><FontAwesomeIcon icon={faArrowRight}/></span>
        </Link>
    </>
  )
}

export default ShowMore