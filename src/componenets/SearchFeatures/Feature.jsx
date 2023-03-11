import React from 'react'

const Feature = ({index,object}) => {
  return (
    <a className='href-feature'>
        <div className='sectionRow'>
            <div className='circle-number'>
                {index+1}
            </div>
            <div>
                <p className='title-section'>{object.title}</p>
                <p className='explanation-section'>{object.explanation.slice(0,60)}...</p>
            </div>
            <p className='date-section'>{object.date}</p>
        </div>
    </a>
  
  )
}

export default Feature