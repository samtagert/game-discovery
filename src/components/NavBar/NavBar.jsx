import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavItem} from 'react-materialize'
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <div>
    <NavItem><Link to='/user'>Welcome, {props.user.name}.</Link></NavItem>
    <NavItem><Link to='/games' className='NavBar-link'>Game Discovery</Link></NavItem>
    <NavItem><Link to='' className='NavBar-link' onClick={props.handleLogout} >Log out</Link></NavItem>
  </div>
  :
  <div>
    <NavItem><Link to='/login' className='NavBar-link'>Log in</Link></NavItem>
    <NavItem><Link to='/signup' className='NavBar-link'>Sign up</Link></NavItem>
  </div>;
  
  return (
    <div>
    <Navbar className="teal" fixed left>
      {nav}
    </Navbar>
    </div>
  );
};

export default NavBar;