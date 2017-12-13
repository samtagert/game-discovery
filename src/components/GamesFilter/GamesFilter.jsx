import React, {Component} from 'react';
import {Row, Input, Button, Card, CardTitle, Col} from 'react-materialize'

class GamesFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: null
    };
  }

  // this.setState({
    // games: whatever is in search field...
    // have a field to input an initial search, after loaded, have the filters below "filter these results by..."
    // after that, you have the option to live filter the list by...
    // tag, genre, rating, year, esrb, platforms, theme?
    // each one updates your list of 50 but no more fetch requests
    // button to discover different games (starts this over)
    // });
    
  firstGamesSearch = () => {
    return this.state.games.map((game, gameIdx) =>
      <Card className='small'
        header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
        actions={[<a href='#'>This is a Link</a>]}>
      </Card>)
    // <li key={gameIdx}>GAME: {game.name}...RATING: {game.total_rating}</li>)
  }

  filterGames = (field, input) => {
    this.state.games.filter(game => "game.field === input").map((game, gameIdx) =>
    <li key={gameIdx}>GAME: {game.name}...RATING: {game.total_rating}</li>)
  }

  //make the search require at least one checkbox for each section be checked
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

  // return x.filter.map
  // have a math.random randomizing the id of however many ids the api has, for loop for 50 times
  // fetch request needs to go in the first filter function and be made "onsubmit"
  // initial fetch takes in themes, platforms, genres
  // filtering after is date and rating?
  // tags be filtered AFTER the initial search, rating and maybe date before


  render() {
    console.log(this.state.games)
    return (
      <div>
        <form onSubmit={this.handleSearch}>
        <Row>
          <Input name='game-modes' type='checkbox' value='1' label='Single Player' className='filled-in' />
          <Input name='game-modes' type='checkbox' value='2' label='Multiplayer' className='filled-in' />
          <Input name='game-modes' type='checkbox' value='3' label='CO-OP' className='filled-in' />
          <Input name='game-modes' type='checkbox' value='4' label='Split-screen' className='filled-in' />
          <Input name='game-modes' type='checkbox' value='5' label='MMO' className='filled-in' />
        </Row>
        <Row>
          <Input name='platforms' type='checkbox' value='48' label='Playstation 4' className='filled-in' />
          <Input name='platforms' type='checkbox' value='49' label='Xbox One' className='filled-in' />
          <Input name='platforms' type='checkbox' value='41' label='Wii U' className='filled-in' />
          <Input name='platforms' type='checkbox' value='6' label='Windows' className='filled-in' />
          <Input name='platforms' type='checkbox' value='37' label='3DS' className='filled-in' />
        </Row>
        <p className="range-field">
          Minimum Rating
          <input name='rating' type="range" id="rating" min="0" max="100" />
        </p>
        <Button type='submit'>Discover Your Next Adventure</Button>
        </form>
        Narrow your Discovery!
        // genre tags that live change your current list, does not make a fetch request
        <div>
          {this.state.games ?
          <Row>
          <Col s={3}>
          {this.firstGamesSearch()}
          </Col>
          </Row>
          :
          <h2>LOADING</h2>}
          <Row>
          <Col s={3}>
          </Col>
          </Row>
        </div>
      </div>
    );
  }
};

export default GamesFilter;