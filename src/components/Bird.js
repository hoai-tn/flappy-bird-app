import React from 'react'
import imgBird from '../images/bird.png'
export const Bird = () => {
  return (
    <div
      style={{
        width: 38,
        height: 26,
        position: 'absolute',
        top: 250,
        left:100,
        background: `url(${imgBird})`,
      }}
    >
      <img src={imgBird}/>
    </div>
  )
}
