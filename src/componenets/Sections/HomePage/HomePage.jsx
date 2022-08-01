import React from 'react'
import {images} from '../../../constants/index'
const HomePage = ({title,subTitle}) => {
  return (
    <div className="imgBackground">
    <div className='titles'>
        <h1 className="title">{title}</h1>
        <h2 className="sub-title">{subTitle}</h2>
    </div>
    <a href="#sec-scroll">
      <div class="scroll-down"></div>
    </a>
    </div>
  )
}

export default HomePage