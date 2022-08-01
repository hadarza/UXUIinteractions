import React,{useRef} from 'react'
import Slider from "react-slick";
import {images} from '../../../constants/index'
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SlickCarosual = () => {
    const slider = useRef();

    const settings = {
        className: "slider variable-width",
        infinite: false,
        variableWidth: true,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 4,
        initialSlide:0,
        arrows: false
    };
    const next = () => {
        console.log("next")
        slider?.current?.slickNext();
        
      }
    const previous = ()  => {
        console.log("prev")
        slider?.current?.slickPrev();
    }
  return (
    <>
    <h1 className='titles_section_h1'>הפרויקטים שלנו</h1>
   <Slider ref={slider} {...settings}>
    <div className='slick-project'>
        <div className='Img-slick'></div>
        <p>Project1</p>
    </div>
    
    <div className='slick-project'>
        <div className='Img-slick'></div>
        <p>Project2</p>
    </div>

    <div className='slick-project'>
        <div className='Img-slick'></div>
        <p>Project3</p>
    </div>

    <div className='slick-project'>
        <div className='Img-slick'></div>
        <p>Project4</p>
    </div>

    <div className='slick-project'>
        <div className='Img-slick'></div>
        <p>Project5</p>
    </div>

    <div className='slick-project'>
        <div className='Img-slick'></div>
        <p>Project6</p>
    </div>

</Slider>

    <div className='buttons-slider'>
        <button className="prev-btn" onClick={previous}>
            <img src={images.next_btn}/>
        </button>
        <button className="next-btn" onClick={next}>
            <img src={images.prev_btn}/>
        </button>
    </div>
    </>

  )
}

export default SlickCarosual