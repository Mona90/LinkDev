import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLongArrowAltLeft, faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Slide } from './style';



function Slides() {

const slides=[
    {
        title:'misson',
        content:'your business expansion destination'
    },
    {
        title:'outsource',
        content:'global it engineering experts'
    },
    {
        title:'deploy',
        content:'accelerate business productivity'
    },
    {
        title:'build',
        content:'futuristic digital platforms'
    }
]
const slideNumber = slides.length
const [index, setActiveIndex] = useState(1)
const selectIndex = () =>{
    for(let i=1; i<=slideNumber; i++){
            if(i=== index){
                return(
            <div className='slide-content'>
                <span className='title'>{slides[index-1].title}</span>
                <h1 className='content'>{slides[index-1].content}</h1>
            </div>    
                )      
           }

    }
}

    return (
        <Slide className=' d-flex'>
            <div id="navigation" className="text-center me-5 flex-column">
                <div className='navigation-control d-flex justify-content-center align-items-center'>
                    <FontAwesomeIcon className='arrow' icon={faLongArrowAltLeft} onClick={()=>setActiveIndex(()=>index !== 1 ? index - 1 : 4)} />
                    <span>{index}</span>
                    <FontAwesomeIcon className='arrow' icon={faLongArrowAltRight} onClick={()=>setActiveIndex(()=>index !== 4 ? index + 1 : 1)} />
                </div>
                <p>/{slideNumber}</p>
            </div>
            <div id="slide" className="text-start">
            {selectIndex()}
                <Link to='/' className='more-link'>
                    <span>More</span>
                    <FontAwesomeIcon icon={faLongArrowAltRight}/>
                </Link>
            </div>
        </Slide>
    );

}

export default Slides;
