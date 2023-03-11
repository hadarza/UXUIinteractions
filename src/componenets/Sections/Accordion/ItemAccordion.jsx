import React,{useState,useRef,useEffect} from 'react'
import {images} from '../../../constants/index'
import {motion,AnimatePresence} from 'framer-motion'
const ItemAccordion = ({countKey,isOpen,item}) => {
  const [IsClose, setIsClose] = useState(true)
  const variantsControl = {
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0, y:0 }
  };

  useEffect(() => {
    if(isOpen){
      setIsClose(false);
      refItem.current.classList.remove("m-1")
     headerItem.current.classList.add("blue2")
      TitleAccordion.current.classList.remove("title-black")
      TitleAccordion.current.classList.add("title-white")
    }
    refItem.current.classList.remove("m-1")
  }, [])
  
  const refItem = useRef();
  const headerItem = useRef();
  const TitleAccordion = useRef();
  const bodyItem = useRef();

  const ToggleOpenClose = () =>{
    setIsClose(!IsClose)
    if(IsClose){
      refItem.current.classList.remove("m-1")
      headerItem.current.classList.add("blue2")
      TitleAccordion.current.classList.remove("title-black")
      TitleAccordion.current.classList.add("title-white")
    }else{
      refItem.current.classList.add("m-1")
      headerItem.current.classList.remove("blue2")
      TitleAccordion.current.classList.add("title-black")
      TitleAccordion.current.classList.remove("title-white")
    }
  }

  return (
    <motion.div
      custom={countKey}
        initial={"visible"}
        whileInView="visible"
        viewport={{ once: false }}
        variants={variantsControl}
        className='item-accordion m-1' 
        ref={refItem}>
      <div className="header-background" onClick={()=>{ToggleOpenClose()}}>
        <div className='header-accordion' ref={headerItem}> 
        <div className='title-accordion title-black' ref={TitleAccordion}>כותרת אקורדיון</div>
               <div className='icon'>
              <img src={images.svgAccordion}/>
            </div>
         </div>
      </div>
      <AnimatePresence initial={false}>
        <motion.div
          key="content"
          initial={"collapsed"}
          exit={IsClose ? "collapsed" : "open"}
          animate={!IsClose ? "open" : "collapsed"}
          variants={{
            open: { opacity: 1,height:"9rem",display:'block'},
            collapsed: { opacity: 0,height:0,display:'none'}
          }}
          ref={bodyItem}
          transition={{ ease: 'easeInOut', duration: 0.8 }}
          className="info-background">
            <div className='img-insideAccordion'>
              <div className="data-accordion">
                <h6 className='m-2-half'>{item.title}</h6>
                <ul>
                  {item.InfoPoints.map((information,index)=>(
                    <li key={index}>{information}</li>
                  ))}

                </ul>
              </div>
            </div> 
        </motion.div>
      </AnimatePresence>
</motion.div>

  )
}

export default ItemAccordion