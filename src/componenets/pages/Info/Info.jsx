import React from 'react'
import {images} from '../../../constants/index'
const Info = () => {
  return (
    <div className='info_div'>
        <h1 className='title_page'>עלינו</h1>
        <div className='div_gifs'>
            <div className='gif computer_gif'>
                <div className='div-img'>
                    <img src={images.computer}/>
                </div>
                <div className='div-p'>
                    <p>פיתוח מערכות</p>
                </div>
            </div>

            <div className='gif camera_gif'>
            <div className='div-img'>
                <img src={images.camera}/>
            </div>
                <div className='div-p'>
                    <p>תחום צילום </p>
                </div>

            </div>

            <div className='gif arrow_gif'>
                <div className='div-img'>
                    <img src={images.arrow}/>
                </div>
                <div className='div-p'>
                    <p>מידע</p>
                </div>
            </div>

            <div className='gif consulation_gif'>
                <div className='div-img'>
                    <img src={images.consulation}/>
                </div>
                <div className='div-p'>
                    <p>חדר ישיבות</p>
                </div>
            </div>

            <div className='gif film_gif'>
                <div className='div-img'>
                    <img src={images.film}/>
                </div>
                <div className='div-p'>
                    <p>צילומי סרטים  </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info