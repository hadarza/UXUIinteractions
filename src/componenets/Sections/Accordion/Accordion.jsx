import React from 'react'
import ItemAccordion from './ItemAccordion'
import ItemsAccordion from './AccordionJson'
import SpeechText from '../SpeechText/SpeechText'

const Accordion = () => {
  
  return (
    <div className='only-flex m-3'>
      
      <div className='info_animation m-2-half'>
        <h3 className='title_accordion'> אקורדיון</h3>
        <h6 className='subTitle_accordion'>דוגמה לאנימציה של אקורדיון נפתחת ונסגרת בהתאם לדרישות המשתמש</h6>
        <ul>
          <li>טקסט כאן</li>
          <li>טקסט כאן</li>
          <li>טקסט כאן</li>
          <li>טקסט כאן</li>

        </ul>
      </div>


      <div className='accordion flex-col'>
        {ItemsAccordion.map((item,key)=>(
           <ItemAccordion countKey={key} isOpen={key == 0 ? true : false} item={item}/>
      ))}
      </div>
    </div>
  )
}

export default Accordion