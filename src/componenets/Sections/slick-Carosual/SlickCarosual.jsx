import React,{useRef} from 'react'
import Slider from "react-slick";
import {images} from '../../../constants/index'
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkNext,GrLinkPrevious } from "react-icons/gr";

const SlickCarosual = () => {
    const slider = useRef();

    const settings = {
        className: "slider variable-width",
        infinite: false,
        variableWidth: true,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 4,
        initialSlide: 0,
        arrows: true,
        nextArrow:  <button className="prev-btn slick-arrow" onClick={next}>
                        <GrLinkNext size={28}/>
                    </button>,
        prevArrow:  <button className="next-btn slick-arrow" onClick={previous}>
                        <GrLinkPrevious size={28}/>
                    </button>

    };
    const next = () => {
        console.log(slider.current)
        slider?.current?.slickNext();
        
      }
    const previous = ()  => {
        console.log(slider.current);
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

    {/* <div className='buttons-slider'>
        <button className="prev-btn slick-arrow" onClick={next}>
            <GrLinkNext size={28}/>
        </button>
        <button className="next-btn slick-arrow" onClick={previous}>
            <GrLinkPrevious size={28}/>
        </button>
    </div> */}
    </>

  )
}

export default SlickCarosual