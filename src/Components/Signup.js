import React, { Component } from 'react';
import Navbar from './Navbar';
import { Router, browserHistory } from 'react-router';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  usernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  passwordChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit(e) {

    e.preventDefault();

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(function(data) {
      console.log('Success: ', data);
      browserHistory.push('/login');
    })
    .catch(function(error) {
      console.log('Request failed: ', error);
    })
  }

  render() {
    return(
      <div>
        <Navbar />
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
        <input
          placeholder='Username'
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.usernameChange}
          />
        <input
          placeholder='Secret'
          type='text'
          name='password'
          value={this.state.password}
          onChange={this.passwordChange}
          />
        <input
          type='submit'
          value='Signup'
          />
        </form>
      </div>
    )
  }
}

export default Signup
