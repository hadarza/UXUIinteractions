import React,{useEffect,useRef} from 'react'
import {images} from '../../../constants/index'
import {motion,useAnimationControls,useViewportScroll,useTransform} from 'framer-motion'

const AnimationPage = () => {
    const controls = useAnimationControls()
    const { scrollYProgress } = useViewportScroll()
    const scrollRef = useRef(null)
    const xPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -100, -100])

    useEffect(() => {
      controls.start(i => ({
        opacity: 1,
        y:-30,
        transition: { delay: i * 0.3 },
      }))
  
    }, [])
  return (
    <div className='main_content animation_color' ref={scrollRef}>
        <div className="div-animation">
        <motion.div  
        initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden:{ opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 }
            }}
            className='circle blue2 t-b-0 '></motion.div>

            <motion.div custom={0} animate={controls}  className="absolute w-18">
                <img className="main-pic" src={images.access_pic2}/>
            </motion.div>
            <motion.div style={{x:xPosAnim}} custom={1} animate={controls} className="absolute w-5">
                <img src={images.cloud}/>
            </motion.div>

            <motion.div style={{x:xPosAnim}} custom={2} animate={controls}  className="absolute w-3">
                <img src={images.cloud}/>
            </motion.div>

            <motion.div custom={3} animate={controls}  className="absolute w-9 ">
                <img src={images.main_pic_1}/>
            </motion.div>
            <motion.div custom={4} animate={controls}  className="absolute w-7">
                <img src={images.main_pic_2}/>
            </motion.div>

        </div>
        
    </div>
  )
}

export default AnimationPage