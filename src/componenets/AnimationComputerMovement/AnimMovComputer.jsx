import React from 'react'
import {images} from '../../constants/index'
const AnimMovComputer = () => {
  return (
    <div className='height-vh'>
        <img className='img-screen shadow-macbook' src={images.macbook_shadow}/>
        <img className='img-screen macbook' src={images.macbook}/>
        <img className='img-screen macbook-screen' src={images.mac_screen}/>

        <img className='img-screen shadow-ipad' src={images.ipad_shadow}/>
        <img className='img-screen ipad' src={images.ipad}/>
        <img className='img-screen ipad-screen' src={images.ipad_screen}/>

        {/* <img className='img-screen shadow-iphone' src={images.iphone_shadow}/> */}




    </div>
  )
}

export default AnimMovComputer