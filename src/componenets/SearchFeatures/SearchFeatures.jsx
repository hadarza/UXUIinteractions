import React from 'react'
import Feature from './Feature'
import SearchFeaturesJSON from './SearchFeaturesJSON'
const SearchFeatures = () => {
  return (
    <div className='background-features'>
        <div className='grid-features'>
            <div className='grid-cells'>
                {SearchFeaturesJSON.map((feature,key)=>(
                    <Feature index={key} object={feature}/>
                ))
                }
                <div></div>

            </div>
        </div>
    
    </div>
    
  )
}

export default SearchFeatures