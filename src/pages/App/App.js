import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import GamePage from '../GamePage/GamePage';
import GamesPage from '../GamesPage/GamesPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: null
    }
  }

  
  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }
  
  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }
  
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user})
  }
  
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/' render={() =>
              <WelcomePage
                user={this.state.user}
                handleLogout={this.handleLogout}
              />
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
            <Route exact path='/signup' render={(props) => 
              <SignupPage
                {...props}
                handleSignup={this.handleSignup}
              />
            }/>
            <Route exact path='/login' render={(props) => 
              <LoginPage
                {...props}
                handleLogin={this.handleLogin}
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