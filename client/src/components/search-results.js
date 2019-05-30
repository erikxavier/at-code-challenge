import React, { Component } from 'react'
import MovieCard from './movie-card'
import StatusHandler from './status-handler'
import { fetchMovieList } from '../data/api'

class SearchResults extends Component {
  constructor (props) {
    super(props)
    this.state = {
      dataFetched: false,
      results: []
    }
  }

  componentDidMount () {
    fetchMovieList()
      .then(movies => {
        this.setState({
          dataFetched: true,
          results: movies
        })
      })
  }
  render () {
    if (this.state.dataFetched !== true) return <StatusHandler status={this.state.dataFetched} />
    const { queryString } = this.props.match.params
    return (
      <div>
        <div className='row px-3'>
          <h1 className='mx-auto mt-1'>{this.state.results.length} results for "{queryString}"</h1>
        </div>
        <div className='row px-3'>
          {this.state.results.map((movie) => <MovieCard movie={movie} />)}
        </div>
      </div>
    )
  }
}

export default SearchResults
