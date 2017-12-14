import React, {Component} from 'react';
import {Row, Col} from 'react-materialize'

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
        {this.state.game ?
        <div><h3>{this.state.game[0].name}</h3>
        <h4>{this.state.game[0].total_rating}</h4>
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