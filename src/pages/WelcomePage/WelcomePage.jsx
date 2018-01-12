import React from 'react';
import { Link } from 'react-router-dom'
import './WelcomePage.css';
import { Button } from 'react-materialize'

const WelcomePage = () => {
  return (
    <div className='welcome'>
      <h2>Start your adventure.</h2>
      <Button><Link to='/games'>Discover games now!</Link></Button>
    </div>
  )
}

export default WelcomePage;