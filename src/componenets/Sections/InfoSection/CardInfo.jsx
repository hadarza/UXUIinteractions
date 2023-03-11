import React from 'react'
import {images} from '../../../constants/index'

const CardInfo = ({Card}) => {
  return (
    <div className={`cardInformation ${Card.colorBg}`}>
        <div className={`div-img-section ${Card.colorImg}`}>
            <div className='div-img'>
                <img src={Card.img}/>
            </div>
        </div>
        
        <div className='div-info-section'>
            <div className='title_info'>
                <div className='small-text'>{Card.title}</div>
                <div className='regular-text'>{Card.subTitle}</div>
            </div>
            <div className='pargarph_info'>{Card.info}</div>
            <div className="div-WatchProject">
            <a href={"/"}>
                <div className="next-div">
                    <div className="div-img-next">
                        <img src={images.svgNextArrow}/>
                    </div>
                    <div className="div-p-next">
                        <p>צפה בפרויקט</p>
                    </div>
                </div>
            </a>

            </div>
        </div>
    </div>

  )
}

export default CardInfo