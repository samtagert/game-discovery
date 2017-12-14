import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import {Row, Col, Button} from 'react-materialize'

class GameShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: null
    };
  }

  discover = (event) => {
    event.preventDefault();      
    let igdbId = this.state.game[0].id
    let name = this.state.game[0].name
    let thumbnail = this.state.game[0].cover
    fetch('/api/games/discover', {
      method: "POST",
      body: JSON.stringify({igdbId, name, thumbnail}),
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }
    })
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
        {this.state.game ?
        <div><h3>{this.state.game[0].name}</h3><Button onClick={this.discover}>Add to Discovery List</Button>
        <h4>{this.state.game[0].total_rating}</h4>
        {<img className="games-img" src={this.state.game[0].cover.url}></img> || "Oops"}
        <Row>
          <Col m={9} s={12}>
            <p>{this.state.game[0].summary}</p>
          </Col>
        </Row></div>
        : <h2>LOADING</h2>}
      </div>
    );
  }
};

export default GameShow;