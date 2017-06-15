import React, { Component } from 'react'
import Navbar from './Navbar';

class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: '',
      title: '',
      href: '',
      summary: ''
    }
    this.loadShow = this.loadShow.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }

  loadShow() {
    fetch(`https://api.tvmaze.com/shows/${this.props.params.id}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        this.setState({
          data: data,
          title: data.name,
          href: data.image.medium,
          summary: data.summary
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.loadShow()
  }

  createMarkup() {
    return {__html:  this.state.summary}
  }

  render() {
    if (!this.state.data) {
      console.log('not yet')
    } else {
      console.log('loaded')
    }

    return (

      <div>
      <Navbar/>
      <h1>{this.state.title}</h1>
      <img src={this.state.href}/>
        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
      </div>
    )
  }
}

export default Show
