import React, { Component } from 'react';
import Navbar from './Navbar';
import { browserHistory } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      currentUser: ''
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

    fetch('/login', {
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
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      this.setState({
        currentUser: data[0].username
      })
      console.log(this.state.currentUser)
      browserHistory.push('/')
    })
    .catch(function(error) {
      console.log('Error: ' + error)
    })
  }
  render() {
    return (
      <div>
      <Navbar />
      <h1>Login</h1>
      <form onSubmit={this.handleSubmit}>
        <input
        onChange={this.usernameChange}
        placeholder='Username'
        type='text'
        name='username'
        value={this.state.username}
        />
        <input
        onChange={this.passwordChange}
        placeholder='Secret'
        type='text'
        name='password'
        value={this.state.password}
        />
        <input
        type='submit'
        value='Login'
        />
      </form>
      </div>
    )
  }
}

export default Login
