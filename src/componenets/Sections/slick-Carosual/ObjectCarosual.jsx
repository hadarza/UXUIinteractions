import React from 'react'
import {images} from '../../../constants/index'
const ObjectCarosual = () => {
    /* change title,info and image using JSON file with props and map functionallity */
  return (
    <div className='slick-project'>
        <div className='Img-slick'>
            <div className='center-img'>
                <img src={images.camera}/>
            </div>
        </div>
        <div className='info-slick'>
            <h2>כותרת אודות פרויקט</h2>
            <p>מידע על קרוסלה כאן.</p>
        </div>
</div>
  )
}

export default ObjectCarosual