import React,{useEffect} from 'react'
import {motion,useAnimationControls} from 'framer-motion'
import Info from '../Info/Info'
import CircleInfo from '../CircleInfo/CircleInfo'
import AboutUs from '../AboutUS/AboutUs'
import Card from '../Cards/Card'
import cards from '../Cards/CardJSON'

const LandingPage = () => {
  const controls = useAnimationControls()
  const textMotion = useAnimationControls()
  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      x: 20,
      y:10,
      transition: { delay: i * 0.3 },
    }))

    textMotion.start({opacity:1,
    transition:{delay: 0.8}})
  }, [])

  return (
    <div className='main_content'>
      <div className="imgLandingPage">
        <div className="bg_landing">
          <div className='bg_pattern_landing'>
            <img className='bg_pattern_img'/>
          </div>
          <motion.div custom={0} animate={controls} className='hero_div div_hero_girl'></motion.div>
          <motion.div custom={1} animate={controls} className='hero_div div_hero_boy_1'></motion.div>
          <motion.div custom={2} animate={controls} className='hero_div div_hero_boy_2'></motion.div>
          <div className='hero_div div_hero_boy_3'></div>
          <motion.div animate={textMotion} className='title_landing_page'>
            <h1>פרוייקט לדוגמה</h1>
          </motion.div>
        </div>  
      </div>
      {/* <Info/> */}
      <AboutUs/>
      {/* <CircleInfo/> */}
      <Card cards={cards}/>
    </div>
    
  )
}

export default LandingPage