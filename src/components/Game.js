import React from 'react';

import { Bird } from './Bird';
import { Pipe } from './Pipe';
import { Foreground } from './Foreground';

import bgGame from '../images/background.png';
const Game = () => {
  return (
    <div
      style={{
        width: 288,
        height: 505,
        background: `url(${bgGame})`,
        position: 'relative',
      }}
    >
      <Bird/>
      <Pipe/>
      <Foreground/>
    </div>
  )
}

export default Game;