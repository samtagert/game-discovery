import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

import GamesIndexPage from '../GamesIndexPage/GamesIndexPage';
import WelcomePage from '../WelcomePage/WelcomePage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import tokenService from '../../utils/tokenService'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      discoveryList: null
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

  updateDiscoveryList() {
    console.log('UPDATE LIST')
    fetch('/api/users/discoverylist', {
      headers: {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      },
    })
    .then(res => res.json())
    .then(console.log(this))
    .then(discoveryList => this.setState({discoveryList}))
    .catch(err => console.log('err =', err))
  }

  componentDidMount() {
    let user = userService.getUser();
    this.setState({user})
    this.updateDiscoveryList();
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <div>
              <NavBar
                user={this.state.user}
                discoveryList={this.state.discoveryList}
                handleLogout={this.handleLogout}
              />
            </div>
            <Switch>
              <Route exact path='/' render={() =>
                <WelcomePage
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                />
              }/>
              <Route exact path='/games' render={(props) =>
                <GamesIndexPage
                  {...props}
                  user={this.state.user}
                  handleLogout={this.handleLogout}
                  updateDiscoveryList={() => this.updateDiscoveryList()}
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
          </div>
        </Router>
      </div>
    );
  }
}

export default App;