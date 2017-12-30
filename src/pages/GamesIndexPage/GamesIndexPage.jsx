import React, {Component} from 'react';
import './GamesIndexPage.css';
import {Row, Input, Button, Collection, CollectionItem} from 'react-materialize'
import { Link } from 'react-router-dom'
import GameListItem from '../../components/GameListItem/GameListItem';
import GameFilterForm from '../../components/GameFilterForm/GameFilterForm';


class GamesIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: null
    };
  }

  handleSearch = (event) => {
    event.preventDefault();  
    var gameModes = []
    var platforms = []
    var rating = []
    for (var i = 0; i < 11; i++) {
      if (event.target[i].name === 'game-modes') {
        if (event.target[i].checked === true) {
          gameModes.push(event.target[i].value)
        }
      }
      if (event.target[i].name === 'platforms') {
        if (event.target[i].checked === true) {
          platforms.push(event.target[i].value)
        }
      }
      if (event.target[i].id === 'rating') {
          rating.push(event.target[i].valueAsNumber)
      }
    }
    fetch('/api/games', {
      method: "POST",
      body: JSON.stringify({gameModes, platforms, rating}),
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }
    })
    .then(data => data.json())
    .then(data => {this.setState({games: data})});
  }

  discover = (game, id) => {
    let igdbId = id
    let name = game
    let user = this.props.user
    fetch('/api/games/discover', {
      method: "POST",
      body: JSON.stringify({igdbId, name, user}),
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }
    })
    .then(res => res.json())
    .then(this.props.history.push('/'))
  }

  render() {
    return (
      <div className="games-page">
        <GameFilterForm handleSearch={this.handleSearch} />
        <div>
          {this.state.games ?
          <Collection>
          {this.state.games.map((game, gameIdx) => <GameListItem game={game} gameIdx={gameIdx} discover={this.discover}/>)}
          </Collection>
          :
          <div></div>}
        </div>
      </div>
    );
  }
};

export default GamesIndexPage;