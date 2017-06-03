import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import {
  Router,
  hashHistory,
  Route,
  Link
} from 'react-router';

class App extends Component {
  render() {
    return (
        <Router history={hashHistory}>
          <div>
            <Route path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
          </div>
        </Router>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
