import React,{useState,} from 'react'
import { SketchPicker } from 'react-color'



const Colorful2 = () => {
    const [color, setColor] = useState("#121212");

const handleChange = (value) => {
setColor(value.hex)
console.log(color)
}
  return (
    <SketchPicker
        color={color}
        onChange={(value)=>{setColor(value.hex)}}
        onChangeComplete={(value)=>{setColor(value.hex)}}
    />      
      )
}

export default Colorful2