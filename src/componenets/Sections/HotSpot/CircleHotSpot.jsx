import React,{useRef,useState} from 'react'
import {images} from '../../../constants/index'
const CircleHotSpot = (props) => {
    const [FromClose, setFromClose] = useState(false)
    const checkboxRef = useRef()
    const refAns = useRef()

  return (
    <>
    <div className={`hot-spot${props.id}`}>
        <div className='speech-bubble'>
            <h1>כותרת</h1>
            <p>לכתוב...</p>
        </div>
    </div>
    
    </>
       
    )
}

export default CircleHotSpot