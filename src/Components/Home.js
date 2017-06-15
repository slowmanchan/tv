import React, { Component } from 'react';
import Navbar from './Navbar';
import Search from './Search';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Home</h1>
        <Search />
      </div>
    )
  }
}

export default Home;
