import React, { useContext,useState } from 'react'
import { dataContext } from '../../App'
import NewsItem from '../NewsItem/NewsItem'
import { Content } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiagramProject, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import {faFacebookF, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { heartSolid } from '../../Icon/type'

function ItemDetails(props) {

   const ItemID = props.paramsID
   const {data} = useContext(dataContext)
   const [wishList, setWichList] = useState(false)
   const [show, setShow] = useState(false)
 
  return (
    <Content className='container py-5'>
    {data && data.filter(dataItem => dataItem.id === ItemID).map(item => (
      <div className='row item-details' key={item.id}>
        <div className='col-6'>
          <img className='img-fluid' src={item.urlToImage} alt=""/>
        </div>
        <div className='col-6'>
            <h3>{item.title}</h3>
            <div className='d-flex info justify-content-between align-items-center'>
              <span>{item.published}</span>
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

            <p>{item.description}</p>
        </div>
          <p className='col-12 my-4 content'>{item.content}</p>
      </div>
    ))}
    <div  className='row'>
      <div className='col-12'><h3>You might see also...</h3></div>
        {data.slice(0,3).map(item=>(
                <NewsItem class="col-4" key={item.id} title={item.title} imgURL={item.urlToImage} date={item.published}/>
        ))}
    </div>
    </Content>
  )
}

export default ItemDetails