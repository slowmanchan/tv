import React, { Component } from 'react';

class AddShow extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    fetch('/show', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: t,
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

        <input
          value='Add'
          onClick={this.handleClick}
          type='button'/>

    )
  }
}

export default AddShow;
