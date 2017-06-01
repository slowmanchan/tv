import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  hashHistory,
  Route,
  Link
} from 'react-router';

class App extends Component {
  render() {
    return (
        <div>
          <h1>hello Earl</h1>
        </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
