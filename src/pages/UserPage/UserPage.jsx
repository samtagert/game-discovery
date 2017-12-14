import React from 'react';
import './UserPage.css';

const UserPage = (props) => {
  return (
    <div>
      <h2>{props.user.name}</h2>
    </div>
  )
}

export default UserPage;