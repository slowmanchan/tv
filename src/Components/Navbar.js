import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import { Link } from 'react-router';

class Navbar extends Component {
  render() {
    return(
      <div>
        <Link to='/show/2'>test</Link>
        <Link to='/'>Home</Link>
        ||
        <Link to='/login'>Login</Link>
        ||
        <Link to='/signup'>Signup</Link>
        ||
        {this.props.currentUser}
      </div>
    )
  }
}

export default Navbar;
