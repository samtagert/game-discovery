import React from 'react';
import './UserPage.css';
import UserShow from '../../components/UserShow/UserShow'

const UserPage = (props) => {
  return (
    <div>
      <UserShow user={props.user}/>
    </div>
  )
}

export default UserPage;