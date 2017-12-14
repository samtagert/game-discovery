import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {Row, Input, Button, Card, CardTitle, Col, Collection, CollectionItem, Carousel} from 'react-materialize'

class GameShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: null
    };
  }

  componentDidMount() {
    fetch(`/api/games/${this.props.id}`)
    .then(res => res.json())
    .then(game => this.setState({game}))
  }

  render() {
    console.log(this.state.game)
    return (
      <div>
        {this.state.game ? <div><h2>{this.state.game[0].name}</h2><p>{this.state.game[0].id}</p></div> : <h2>LOADING</h2>}
      </div>
    );
  }
};

export default GameShow;