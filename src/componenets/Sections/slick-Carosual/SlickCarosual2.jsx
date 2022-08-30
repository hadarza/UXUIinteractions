import React,{useRef,useState} from 'react'
import Slider from "react-slick";
import {images} from '../../../constants/index'
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkNext,GrLinkPrevious } from "react-icons/gr";

const SlickCarosual2 = () => {
    const slider = useRef();
const [current, setCurrent] = useState(0)
const maxLength = 4;
    const settings = {
        className: "slider variable-width",
        infinite: false,
        centerMode: false,
        cssEase: 'linear',
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        nextArrow:  <button className="next-btn slick-arrow" onClick={next}>
                        <GrLinkNext size={28}/>
                    </button>,
        prevArrow:  <button className="prev-btn slick-arrow" onClick={previous}>
                        <GrLinkPrevious size={28}/>
                    </button>

        , beforeChange: (oldIndex, newIndex) => {
            setCurrent(newIndex)
            }
    };
    const next = () => {
        console.log("next has been clicked "+slider.current)
        slider?.current?.slickNext();
        
      }
    const previous = ()  => {
        console.log("prev has been clicked "+slider.current);
        slider?.current?.slickPrev();
    }
  return (

   <Slider ref={slider} {...settings}>
        <div className='slick-project'>
            <div className='Img-slick'>
                <div className='center-img'>
                    <img src={images.camera}/>
                </div>
            </div>
            <div className='info-slick'>
                <h2>Title here</h2>
                <p>Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.</p>
                </div>        
            </div>

        <div className='slick-project'>
            <div className='Img-slick'>
                <div className='center-img'>
                    <img src={images.camera}/></div>
                </div>
            <div className='info-slick'>
            <h2>Title here</h2>
             <p>Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.</p>
            </div>
        </div>



        <div className='slick-project'>
            <div className='Img-slick'>
                <div className='center-img'>
                    <img src={images.camera}/>
                </div>
            </div>
            <div className='info-slick'>
                <h2>Title here</h2>
                <p>Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.</p>
            </div>        
        </div>


        <div className='slick-project'>
            <div className='Img-slick'>
                <div className='center-img'>
                    <img src={images.camera}/>
                </div>
            </div>
            <div className='info-slick'>
                <h2>Title here</h2>
                <p>Kickstart your design process for a wide variety of apps such as calendar, analytics, virtual assistant, file manager.</p>
            </div>        
        </div>
</Slider>


  )
}

export default SlickCarosual2