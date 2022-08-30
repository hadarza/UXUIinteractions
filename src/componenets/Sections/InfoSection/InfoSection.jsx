import React,{useRef} from 'react'
import CardInfo from './CardInfo'
import CardJSON from './CardJSON'
import {motion,useViewportScroll,useTransform} from 'framer-motion'

const InfoSection = () => {
  const scrollRef = useRef(null)

  const variantsControl = {
    visible: (i) => ({
      opacity: 1,
      y:-10,
      transition: { delay: i * 0.3 },
    }),
    hidden: { opacity: 0, y:0 }
  };

  return (
    <div className="flex main_content" ref={scrollRef}>
      <div className='height-100 flex-row flex'>
        {CardJSON.map((card,index)=>(
          <motion.div
          initial="hidden"
          custom={index}
          whileInView="visible"
          viewport={{ once: false }}
          variants={variantsControl}
          key={index}>
            <CardInfo Card={card}/>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default InfoSection