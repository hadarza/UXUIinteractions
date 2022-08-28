import React from 'react'
import { images } from '../../../constants'

const Card = ({title,subTitle}) => {
  return (
    <div className='cards-container'>
        <div className="Card-work">

            <div class="work-image ">
                <div className='div-img-crisp_work'>
                    <img src={images.crisp_work}/>
                </div>
            </div>

            <div class="work-detail">
                <div className='work-info'>
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
                </div>
                <div className="">
                    <a class="btn btn-work" href={images.crisp_work} target="_blank">View Project</a>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Card