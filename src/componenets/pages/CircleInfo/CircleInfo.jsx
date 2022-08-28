import React from 'react'
import {images} from '../../../constants/index'
const CircleInfo = () => {
  return (
    <div className="background_info">
      <ul class='circle-container'>
        <li><div className="circle-div"><img src={images.background_earth} alt="..." /></div></li>
        <li><div className="circle-div"><img src={images.background_earth} alt="..." /></div></li>
        <li><div className="circle-div"><img src={images.background_earth} alt="..." /></div></li>
        <li><div className="circle-div"><img src={images.background_earth} alt="..." /></div></li>
        <li><div className="circle-div"><img src={images.background_earth} alt="..." /></div></li>
        <li><div className="circle-div"><img src={images.background_earth} alt="..." /></div></li>
        <li><div className="circle-div"><img src={images.background_earth} alt="..." /></div></li>
        <li><div className="circle-div"><img src={images.background_earth} alt="..." /></div></li>
        <li><div className="circle-div"><img src={images.background_earth} alt="..." /></div></li>
        <li><img className="bigEarth" src={images.background_earth} alt="..." /></li>


    </ul>
  </div>
)
}

export default CircleInfo