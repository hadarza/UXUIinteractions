import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Conf =() => {
 
  const { width, height } = useWindowSize();  
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}
export default Conf