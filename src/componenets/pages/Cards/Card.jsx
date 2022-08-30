import React from 'react'
import { images } from '../../../constants'

const Card = ({cards}) => {

  return (
    <div className=' relative flex-col'>
        <div className="height-100">
            {cards.map((card,index)=>(
                <div className='cards-container' key={index}>
                    <div className="Card-work">
                        <div class="work-image ">
                            <div className='div-img-crisp_work'>
                                <img src={card.img}/>
                            </div>
                        </div>

                        <div class="work-detail">
                            <div className='work-info'>
                                <h6>{card.title}</h6>
                                <p>{card.subTitle}</p>
                            </div>
                            <div className="">
                                <a class="btn btn-work" href={images.crisp_work} target="_blank"><p>צפה בפרויקט</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
       </div>

  )
}

export default Card