import React from 'react';
import { Link } from 'react-router-dom'
import './GamePage.css';
import NavBar from '../../components/NavBar/NavBar';
import GameShow from '../../components/GameShow/GameShow'
import {Carousel} from 'react-materialize'

const GamePage = (props) => {
  return (
    <div>
      <GameShow id={props.match.params.id}/>
    </div>
  );
}

export default GamePage;