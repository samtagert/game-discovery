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
    fetch('/games').then(data => data.json())
    .then(data => this.setState({games: data.body}))
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
                user={this.state.user}
                games={this.state.games}
                handleLogout={this.handleLogout}
              />
            }/>
            <Route exact path='/game' render={() =>
              <GamePage
                user={this.state.user}
                handleLogout={this.handleLogout}
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