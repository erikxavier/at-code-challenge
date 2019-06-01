import React, { Component } from 'react'
import MovieCard from './movie-card'
import StatusHandler from './status-handler'
import { searchMovie } from '../data/api'
import ScrollDetector from './scroll-detector'

class SearchResults extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fetchedData: false,
      movies: []
    }

    this.loadMore = this.loadMore.bind(this)
    this.updateResults = this.updateResults.bind(this)
  }
  
  loadMore () {
    if (this.state.currentPage >= this.state.totalPages) {
      this.setState({
        detectScroll: false
      })
      return
    }
    this.setState({
      loadingMore: true,
      detectScroll: false
    })
    this.updateResults(this.props.match.params.queryString, this.state.currentPage + 1)
  }

  updateResults (queryString, page) {
    if (!page) page = 1
    searchMovie(queryString, page)
      .then(data => {
        this.setState({
          fetchedData: true,
          detectScroll: true,
          loadingMore: false,
          movies:  Array.prototype.concat(this.state.movies, data.results),
          results: data.total_results,
          currentPage: data.page,
          totalPages: data.total_pages
        })
      })
  }

  componentDidUpdate (prevProps) {
    if (this.props.match.params.queryString !== prevProps.match.params.queryString) {
      this.setState({
        fetchedData: false,
        detectScroll: false,
        movies: []
      })      
      this.updateResults(this.props.match.params.queryString)
    }
  }

  componentDidMount () {
    this.updateResults(this.props.match.params.queryString)
  }
  render () {
    if (this.state.fetchedData !== true) return <StatusHandler status={this.state.fetchedData} />
    const { queryString } = this.props.match.params
    return (
      <div>
        <ScrollDetector active={this.state.detectScroll} onBottom={this.loadMore} />
        <div className='row px-3'>
          <h1 className='mx-auto mt-1'>{this.state.results} results for "{queryString}"</h1>
        </div>
        <div className='row px-3'>
          {this.state.movies.map((movie, index) => <MovieCard movie={movie} key={index}/>)}
          { this.state.loadingMore ? <StatusHandler status={false} /> : ''}
        </div>
      </div>
    )
  }
}

export default SearchResults
