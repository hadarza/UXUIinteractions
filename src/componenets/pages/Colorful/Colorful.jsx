import React,{useState,useEffect} from 'react'
import { HexColorPicker } from "react-colorful";

const Colorful = () => {
    const [color, setColor] = useState("#aabbcc");

    useEffect(() => {
      console.log(color)

    }, [color])
    
  return (

    <HexColorPicker color={color} onChange={setColor} />
  )
      
}

export default Colorful