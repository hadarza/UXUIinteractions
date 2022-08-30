import React,{useEffect,useRef} from 'react'
import SlickCarosual2 from '../slick-Carosual/SlickCarosual2';
import {motion,useAnimationControls} from 'framer-motion'

const SlickCarosual = () => {
  const scrollRef = useRef(null)
    const controls = useAnimationControls()
    useEffect(() => {
      controls.start(i => ({
        opacity: 1,
        y:-10,
        transition: { delay: i * 0.3 },
      }))
  
    }, [])
  return (
    <div className='main_content dark_gray'>
        <div className="relative">
            <div className='pink2 circle medium-circle'></div> 
            <div className='circle-gray circle medium-circle'></div>

          
            <div className='title-carosual-div' ref={scrollRef}>
                <motion.h2 initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, y: 10 },
                        hidden: { opacity: 0, y: 0 }
                    }} className="title-carosual">אנימציית קרסולה</motion.h2>
            </div>
             <div className='info-gray'>
            <motion.p initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, y: 10 },
                        hidden: { opacity: 0, y: 0 }
                    }} className='center'>
            אנימצייה מספר 1 - קרוסלה </motion.p>
          </div>
         <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 }
              }}
            className='section-main-content'></motion.div>
            <SlickCarosual2/>
        </div>

    </div>
  )
}

export default SlickCarosual