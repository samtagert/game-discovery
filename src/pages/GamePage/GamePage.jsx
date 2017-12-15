import React from 'react';
import './GamePage.css';
import GameShow from '../../components/GameShow/GameShow'

const GamePage = (props) => {
  return (
    <div>
      <GameShow 
      {...props}
      id={props.match.params.id} user={props.user}/>
    </div>
  );
}

export default GamePage;