import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiagramProject, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { Card } from './style'
import { heartSolid } from '../../Icon/type'
import { Link } from 'react-router-dom'

function NewsItem(props) {
  const [wishList, setWichList] = useState(false)
  const [show, setShow] = useState(false)



  return (
    <Card className={props.class? 'card column col-4': 'card column'} style={{marginBottom:`${props.marginBottom? props.marginBottom: null}`}}>
        <img src={props.imgURL} className="card-img-top" alt="..."/>
        <div className="card-body">
        {/* <h5 className="card-title" onClick={()=>setNavigate(props.id)}>{props.title}</h5> */}
          <h5 className="card-title"><Link to={`/news-details/${props.id}`}>{props.title}</Link></h5>
          <div className='d-flex info justify-content-between'>
              <span>{props.date}</span>
              <div className='d-flex'>
                <FontAwesomeIcon className='me-2' icon={wishList ? heartSolid: faHeart} onClick={()=>setWichList(!wishList)}/>
                <div className='link'>
                  <FontAwesomeIcon icon={faDiagramProject} onClick={()=>setShow(!show)}/>
                  {show && (
                    <div className='social-media d-flex'>
                    <span className='facebook' style={{background:'#306CC2'}}><FontAwesomeIcon icon={faFacebookF} /></span>
                    <span className='twitter' style={{background:'#00B9FF'}}><FontAwesomeIcon  icon={faTwitter} /></span>
                    <span className='mail' style={{background:'#FB7E7E'}}><FontAwesomeIcon  icon={faEnvelope} /></span>
                  </div>
                  )}
                  
                </div>
              </div>
          </div>
        </div>
    </Card>
  )
}

export default NewsItem