import React from 'react';
import { Link } from 'react-router-dom'
import './WelcomePage.css';
import NavBar from '../../components/NavBar/NavBar';

const WelcomePage = (props) => {
  return (
    <div>
      <br></br>WelcomePage<br></br><br></br>
      <Link to='/'>Welcome</Link><br></br>
      <Link to='/games'>Games</Link><br></br>
      <Link to='/game'>Game</Link><br></br><br></br>
    </div>
  )
}

export default WelcomePage;