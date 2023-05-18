
import React, { useState, useEffect ,useRef} from 'react';

// const SCROLL_INTERVAL = 3000;
// const NUM_DIVS = 4;
// const size = "100%"
function AnimationScrollable() {
    // const [currentDiv, setCurrentDiv] = useState(1);
    // const childRef = useRef();
  
    // useEffect(() => {
    //   const intervalId = setInterval(() => {
    //     setCurrentDiv(currentDiv => (currentDiv % NUM_DIVS) + 1);
    //   }, SCROLL_INTERVAL);
    //   return () => clearInterval(intervalId);
    // }, []);
  
    // const handleTransitionEnd = () => {
    //   if (currentDiv === 0) {
    //     childRef.current.style.transition = 'none';
    //     setCurrentDiv(NUM_DIVS);
    //     setTimeout(() => {
    //       childRef.current.style.transition = 'transform 0.5s ease-in-out';
    //       childRef.current.style.transform = `translateY(${-size * (counter + 1)}px)`;
    //     }, 10);
    //   } else if (currentDiv === NUM_DIVS + 1) {
    //     childRef.current.style.transition = 'none';
    //     setCurrentDiv(1);
    //     setTimeout(() => {
    //       childRef.current.style.transition = 'transform 0.5s ease-in-out';
    //       childRef.current.style.transform = `translateY(-${100}%)`;
    //     }, 10);
    //   }
    // };
  
    // useEffect(() => {
    //   childRef.current.addEventListener('transitionend', handleTransitionEnd);
    //   return () => childRef.current.removeEventListener('transitionend', handleTransitionEnd);
    // }, [currentDiv]);
  
    return (
      <div className="vertical-carousel-parent">
        <div className="vertical-carousel-child" >
          <div className="vertical-carousel-div">Div 1</div>
          <div className="vertical-carousel-div">Div 2</div>
          <div className="vertical-carousel-div">Div 3</div>
          <div className="vertical-carousel-div">Div 4</div>
          <div className="vertical-carousel-div">Div 1</div>
        </div>
      </div>
    );
  }
    
export default AnimationScrollable;