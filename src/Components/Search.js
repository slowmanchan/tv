import React, { Component } from 'react'
import Show from './Show';
import { Link } from 'react-router';
import AddShow from './AddShow';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      shows: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch(`https://api.tvmaze.com/search/shows?q=${this.state.query}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        this.setState({
          shows: data
        })
      })
      .catch((err) => {
        console.log(err)
      })

  }

  render() {
    var shows = this.state.shows.map((show, idx) => {
      return (
        <span>
        <Link to={`/show/${show.show.id}`} path={Show}>
        <img key={idx} src={show.show.image ? show.show.image.medium : show.show.name}/>
            </Link>
        <AddShow
          show={show}
          />
          </span>
        )
    })

    return (
      <div>
      <h2>Search shows</h2>
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type='text'
          value={this.state.query}/>

        <input
          type='submit'
          value='go'/>
      </form>
      {console.log(this.state.shows)}
      {shows}
      </div>
    )
  }
}

export default Search;
