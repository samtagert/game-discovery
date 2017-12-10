import React from 'react';
import { Link } from 'react-router-dom'
import './GamesPage.css';

const GamesPage = () => {
  return (
    <div>
      GamesPage<br></br><br></br>
      <Link to='/'>Welcome</Link><br></br>
      <Link to='/games'>Games</Link><br></br>
      <Link to='/game'>Game</Link><br></br><br></br>
      <Link to='/signup'>Signup</Link><br></br>
      <Link to='/login'>Login</Link><br></br><br></br>
      List of games
    </div>
  );
}

export default GamesPage;