import React from 'react'
import { images } from '../../../constants'
import  {AiOutlineArrowLeft} from 'react-icons/ai' 
import {motion,AnimatePresence} from 'framer-motion'
const ImagesSkew = ({index,img,title}) => {

  var skewImg = "div-img-skew"+ index
  const buttonVariants = {
    hidden:{opacity:0},
    show:{opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    }
  }

  const itemA = {
    hidden: {top: 120},
    show: {top: 0 },
}

  return (
    <div className="img-skew">
      <h2>{title}</h2>
        <div className={skewImg}>

        <AnimatePresence exitBeforeEnter>
          <motion.div
              whileHover="show"
              initial="hidden"
              variants={buttonVariants}
              transition={{duration:"0.6"}}
             className='Skew-hover-background'>
            <motion.div variants={itemA} className={`circle-btn ${index == 1 && ' special-circle'}`}>
              <AiOutlineArrowLeft size={30} color="white"/>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <img src={img}/>

      </div>
    </div>
   
  )
}

export default ImagesSkew