import React from 'react'

import Fg from '../images/fg.png'
export const Foreground = () => {
  return (
    <div 
      style={{
        position: 'absolute',
        bottom: 0,
        width: 288,
        height: 100,
        background: `url(${Fg})`
      }}
    ></div>
  )
}
