import React from 'react'
import ImagesSkew from './ImagesSkew'
import skewImgs from './Skew'
const SkewContainer = () => {
  return (
    <div className='only-flex m-2'>
        <div className='info_animation m-2-half'>
            <h3 className='title_accordion'>תמונות מחוברות</h3>
            <h6 className='subTitle_accordion'>דוגמה לתצוגה של תמונות בדרך אחרת </h6>
            <div className='flex'>
                {skewImgs.map((skew,key)=>(
                    <ImagesSkew index= {key} img={skew.img} title={skew.title}/>

                ))}
            </div>
        </div>
    </div>
  )
}

export default SkewContainer