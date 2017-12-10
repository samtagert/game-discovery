import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import GamePage from '../GamePage/GamePage';
import GamesPage from '../GamesPage/GamesPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import Nav from '../../components/Nav/Nav'

class App extends Component {
  constructor() {
    super()
    this.state = {
      games: null
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
              <WelcomePage />
            }/>
            <Route exact path='/games' render={() =>
              <GamesPage
                games={this.state.games}
              />
            }/>
            <Route exact path='/game' render={() =>
              <GamePage
                game={this.state.games}
                />
              }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

// REQUEST URL https://api-2445582011268.apicast.io
// APP NAME Sam Tagert's App
// KEY 94cc26f4fbabc150854051ac9194ed3e
// Add this as a user-key parameter to your API calls to authenticate.

// Headers
// Key       Value
// user-key  Your Key
// Accept    application/json

// https://api-2445582011268.apicast.io/genres/?fields=*&filter[slug][eq]=point-and-click
// https://api-2445582011268.apicast.io/games/?filter[rating][gt]=99