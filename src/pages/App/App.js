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
import UserPage from '../UserPage/UserPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      banana: null
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
          <div>
            <div>
              <NavBar
                user={this.state.user}
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
              <Route exact path='/user' render={(props) => 
                <UserPage
                  {...props}
                  user={this.state.user}
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