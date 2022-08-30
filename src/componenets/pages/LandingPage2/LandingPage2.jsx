import React,{useRef} from 'react'
import {images} from '../../../constants/index'
import {motion,useAnimationControls} from 'framer-motion'

const LandingPage2 = () => {
  const controls = useAnimationControls()
  const controlsFromLeft = useAnimationControls()
  const scrollRef = useRef(null)
  
const variantsControl = {
  visible: (i) => ({
    opacity: 1,
    y:-10,
    transition: { delay: i * 0.3 },
  }),
  hidden: { opacity: 0, y:0 }
};

const LeftvariantsControl = {
  visible: (i) => ({
    opacity: 1,
    x:10,
    transition: { delay: i * 0.3 },
  }),
  hidden: { opacity: 0, x:0 }
};

  return (
    <div className='main_content' ref={scrollRef} >
        <div className="right-section">
          <motion.div 
            initial="hidden"
            custom={0}
            whileInView="visible"
            viewport={{ once: false }}
            variants={variantsControl} 
            className='computer_landing_page'>
            <img src={images.computerLandingPage}/>
          </motion.div>
          <motion.div initial="hidden"
            custom={1}
            animate="visible"
            variants={variantsControl} className='mouse'>
            <img src={images.mouse}/>
          </motion.div>
          <motion.div
          initial="hidden"
          custom={0}
          whileInView="visible"
          viewport={{ once: false }}
          variants={LeftvariantsControl} 
          className='mainPic1'>
            <img src={images.main_pic_1}/>
          </motion.div>
          <motion.div 
          initial="hidden"
          custom={1}
          whileInView="visible"
          viewport={{ once: false }}
          variants={LeftvariantsControl} 
            className='mainPic2'>
            <img src={images.main_pic_2}/>
          </motion.div>
        </div>

        <div className='left-section'>

          <div className='yellow circle huge-circle'></div>
          <div className='yellow2 circle medium-circle'></div>
          <div className='white circle tiny-circle'></div>
          <div className='pink circle tiny-circle'></div>
          <div className='blue circle huge-circle2'></div>

          <div>
              <motion.div 
              initial="hidden"
              custom={2}
              whileInView="visible"
              viewport={{ once: false }}
              variants={variantsControl} 
              className='div-first-word'>
                <div className='text-landing'>פרויקט</div>
                <div className='rectangle'></div>
              </motion.div>
              <motion.div
                initial="hidden"
                custom={3}
                whileInView="visible"
                viewport={{ once: false }}
                variants={variantsControl} 
                className="div-second-word">
                  <div className='text-landing'>אינטרקציות</div>
              </motion.div>

               <motion.div
               initial="hidden"
               custom={4}
               whileInView="visible"
               viewport={{ once: false }}
               variants={variantsControl} 
              className='div-third-word'>
               <div className='text-landing'>React</div>
                <div className='circle very-tiny-circle blue-close'></div>
              </motion.div>
          </div>

          <div className='info-gray'>
            <p>אינטרקציות גרירה, הצגת תמונות,תפריט לפרויקטיים עתידיים👋</p>
          </div>
        </div>
     

    </div>
  )
}

export default LandingPage2