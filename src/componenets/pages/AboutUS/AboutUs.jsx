import React,{useState,useEffect} from 'react'
import {images} from '../../../constants/index'
import {people} from './AboutUsJSON'
import {motion,useAnimationControls} from 'framer-motion'

const AboutUs = () => {
    const imagePopUp = useAnimationControls()

    const [peopleAbout, setPeopleAbout] = useState(people)
    useEffect(()=>{
        imagePopUp.start({opacity:1,
            transition:{delay: 0.8}})
    },[])
  return (
    
    <div className='main_content'>
        <h1 className='title_page'>מי אנחנו?</h1>
        <div className='div-about-us'>
            <div className="people-img-div">
                {peopleAbout.map((person,index)=>(
                    <div key={index}>   
                        <p>{person.name}</p>
                        <img src={person.img}/>
                    </div>
                ))}
            </div>

            <div className="div-img-inversity">
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} src={images.diversity}/>
            </div>
        </div>
    </div>
  )
}

export default AboutUs