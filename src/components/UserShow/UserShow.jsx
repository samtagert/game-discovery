import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {Row, Input, Button, Collection, CollectionItem} from 'react-materialize'
import tokenService from '../../utils/tokenService'

class UserShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discoveryList: null
    };
  }

  componentDidMount() {
    console.log(this.props.user)
    fetch('/api/users/discoverylist', {
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
    })
    .then(res => res.json())
    .then(discoveryList => this.setState({discoveryList}))
    .catch(err => console.log('err =', err))
  }
      
      
  render() {
    return (
      <div>
        {this.state.discoveryList ?
        <ul>{this.state.discoveryList.map((game, idx) => <li key={idx}>{game.name}</li>)}</ul>
        : <h2>NO DISCOVERIES</h2>}
      </div>
    );
  }
};

export default UserShow;