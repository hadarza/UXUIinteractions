import React from 'react'
import {images} from '../../../constants/index'
const ItemAccordion = () => {
  return (
    <div className="div-accordion-item">
        <div className='header-accordion'>
        <div className='title-accordion'>כותרת אקורדיון</div>
            <div className='icon'>
                <img src={images.svgAccordion}/>
            </div>
        </div>
        <div className='info-accordion'>
            <div className='img-insideAccordion'>
                </div>
        </div>

    </div>
  )
}

export default ItemAccordion