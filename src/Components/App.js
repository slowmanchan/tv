import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import Show from './Show';
import {
  Router,
  browserHistory,
  Route,
  Link
} from 'react-router';

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <div>
            <Route path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/show/:id' component={Show} />
          </div>
        </Router>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
