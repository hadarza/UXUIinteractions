
import React,{useState,useEffect,useRef} from 'react'

const BackgroundFadeIn = ({title,subTitle}) => {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
<div
      className='background_fade'>
        <h1 className={`title_fade ${isVisible ? 'is-visible' : ''}`} ref={domRef}>{title}</h1>
        <h2 className={`sub_title_fade ${isVisible ? 'is-visible' : ''}`} ref={domRef}>{subTitle}</h2>

    </div>
  )
}

export default BackgroundFadeIn