import React from 'react';
import { Link } from 'react-router-dom'
import './WelcomePage.css';
import { SideNav, SideNavItem, Button } from 'react-materialize'

const WelcomePage = () => {
  return (
    <div>
      <h2>Start your adventure.</h2>
      {/* <SideNav
	      trigger={<Button>SIDE NAV DEMO</Button>}
        options={{ closeOnClick: true }}
        >
        <SideNavItem userView
          user={{
            background: 'http://money.images3.org/images/gallery/set_of_shiny_gold_coins_money_image.jpg',
            name: 'John Doe',
            email: 'jdandturk@gmail.com'
          }}
        />
        <SideNavItem subheader>Discovery List</SideNavItem>
        <SideNavItem divider />
        <SideNavItem waves href='#!third'>Game</SideNavItem>
      </SideNav> */}
    </div>
  )
}

export default WelcomePage;