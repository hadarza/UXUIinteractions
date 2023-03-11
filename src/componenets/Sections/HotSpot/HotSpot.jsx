import React from 'react'
import { images } from '../../../constants'
import CircleHotSpot from './CircleHotSpot'
import './HotSpot.scss'
const HotSpot = () => {
  return (
    <div class="image-indicators">
      <div className='info_animation m-2-half'>
        <h3 className='title_accordion'>HotSpot</h3>
        <h6 className='subTitle_accordion'>דוגמה לאנימציית hotSpot בעת מעבר על הנקודה תפתח לנו בועית עם מידע</h6>
      
      <div className="flex-col">
        <div className='div-img-indicators'>
        {/* <img src="https://www.musee-histoire-marseille-voie-historique.fr/sites/default/files/frontpage_intro_slides/file/m0918-2006.1.1.jpg"/> */}
        {[1,2,3,4].map((object,index)=>(
          <>
              <CircleHotSpot key={index} id={object}/>
          </>
        ))}
        </div>
    </div>
  </div>
</div>

  )
}

export default HotSpot