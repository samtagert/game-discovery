import React from 'react';
import './GamePage.css';
import GameShow from '../../components/GameShow/GameShow'

const GamePage = (props) => {
  return (
    <div>
      <GameShow id={props.match.params.id}/>
    </div>
  );
}

export default GamePage;