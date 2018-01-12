import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavItem, SideNav, SideNavItem, Button} from 'react-materialize'
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
  <div>
    <NavItem>
    <SideNav
      trigger={<Link to='#'>Welcome, {props.user.name}</Link>}
      options={{ closeOnClick: true }}
      >
      <SideNavItem userView
        user={{
          background: 'http://www.yim778.com/data/out/22/704715.jpg',
          name: props.user.name,
          email: props.user.email
        }}
      />
      <SideNavItem>Discovery List</SideNavItem>
      <SideNavItem divider />
      {props.discoveryList ?
      props.discoveryList.map((game) => <SideNavItem>{game.name}</SideNavItem>)
      : <SideNavItem>Waiting for games to be discovered</SideNavItem>
      }
    </SideNav>
    </NavItem>
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
    <Navbar class='navbar' fixed left>
      {nav}
    </Navbar>
    </div>
  );
};

export default NavBar;