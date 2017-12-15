import React from 'react';

const NavBar = (props) => {
  return (
    <div>
      {props.user.discoveryList[0]}
    </div>
  );
};

export default NavBar;