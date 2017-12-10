import React from 'react';
import { Link } from 'react-router-dom'
import './WelcomePage.css';
import NavBar from '../../components/NavBar/NavBar';

const WelcomePage = (props) => {
  return (
    <NavBar
      user={props.user}
      handleLogout={props.handleLogout}
    />
  )
}

export default WelcomePage;