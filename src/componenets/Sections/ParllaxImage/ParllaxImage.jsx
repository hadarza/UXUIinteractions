import React from 'react'
import {images} from '../../../constants/index'
import {motion,useViewportScroll,useTransform} from 'framer-motion'

const ParllaxImage = () => {
    const { scrollYProgress } = useViewportScroll()
    const xPosAnim = useTransform(scrollYProgress, [0, 0.5,1], [0, -50,-100])
    const rotate = useTransform(scrollYProgress, [0,1], [20,20])

  return (
    <div className='main_content column'>
        <motion.div style={{x:xPosAnim,rotate:rotate}} className='parllax-div'>
            <img src={images.parllax1}/>
        </motion.div>
    </div>
  )
}

export default ParllaxImage