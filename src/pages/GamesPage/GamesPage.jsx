import React from 'react';
import { Link } from 'react-router-dom'
import './GamesPage.css';
import NavBar from '../../components/NavBar/NavBar';

const GamesPage = (props) => {
  return (
    <div>
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <br></br>GamesPage<br></br><br></br>
      <Link to='/'>Welcome</Link><br></br>
      <Link to='/games'>Games</Link><br></br>
      <Link to='/game'>Game</Link><br></br><br></br>
      {props.games ? <ul>{props.games.map((game, gameIdx) => <li key={gameIdx}>{game.name}</li>)}</ul>
      : <h2>LOADING</h2>}
    </div>
  );
}

export default GamesPage;