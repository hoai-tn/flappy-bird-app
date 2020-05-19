import React from 'react'
import PipeBottom from '../images/pipe-bottom.png';
import PipeTop from '../images/pipe-top.png'
export const Pipe = () => {
  return (
   <div>
      <div
      style={{
        height:150,
        width:52,
        position:'absolute',
        top: 0,
        left:140,
        background:`url(${PipeTop})`,
        backgroundPosition: 'bottom'
      }}
     ></div>
     <div
      style={{
        height:150,
        width:52,
        position:'absolute',
        left: 140,
        bottom:0,
        background:`url(${PipeBottom})`,
        zIndex: 10
      }}
     ></div>
   </div>
  )
}
