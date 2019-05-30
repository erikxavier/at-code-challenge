import React, { Component } from 'react'
import MovieCard from './movie-card'
import { fetchMovieList } from '../data/api'

export default class MovieList extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount (props) {
    fetchMovieList()
      .then(movies => {
        this.setState({
          movies: movies
        })
      })
  }

  render () {
    if (!this.state.movies) return (<h2>Loading</h2>)
    return (
      <div className='row px-3'>
        {this.state.movies.map((movie) => <MovieCard movie={movie} />)}
      </div>
    )
  }
}
