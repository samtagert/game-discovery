import React, {Component} from 'react';

class GamesFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: null
    };
  }

  // this.setState({
    // games: whatever is in search field...
    // search for specific game || skip and move on
    // have a field to input an initial search, after loaded, have the filters below "filter these results by..."
    // initial search does the fetch call (decide what initial search will be, possibly have options?)
    // after that, you have the option to live filter the list by...
    // tag, genre, rating, year, esrb, platforms, theme?
    // each one updates your list of 50 but no more fetch requests
    // button to discover different games (starts this over)
    // });

  initialGames = (field, input) => {
    return this.state.games.map((game, gameIdx) =>
    <li key={gameIdx}>GAME: {game.name}...RATING: {game.total_rating}</li>)
  }

  filterGames = (field, input) => {
    let games = this.state.games.filter(game => game.field === input)
    return games.map((game, gameIdx) =>
    <li key={gameIdx}>GAME: {game.name}...RATING: {game.total_rating}</li>)
  }

  // return x.filter.map
  // have a math.random randomizing the id of however many ids the api has, for loop for 50 times
  
  componentDidMount() {
    fetch('/games').then(data => data.json())
    .then(data => {
      data.forEach(g => console.log(g.name + ' | ' + g.rating))
      this.setState({games: data})
    });
  }

  render() {
    return (
      <div>
        {/* filter options */}
        {this.state.games ?
        <ul>
        {this.initialGames()}
        </ul>
        :
        <h2>LOADING</h2>}
      </div>
    );
  }
};

export default GamesFilter;