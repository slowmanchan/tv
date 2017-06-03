import React, { Component } from 'react';
import Navbar from './Navbar';

class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Login</h1>
        <form action='/login' method='POST'>
        <input
          placeholder='Username'
          type='text'
          name='username'
          />
        <input
          placeholder='Secret'
          type='text'
          name='password'
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
