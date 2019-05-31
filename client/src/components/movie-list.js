import React, { Component } from 'react'
import MovieCard from './movie-card'
import { fetchMovieList } from '../data/api'
import StatusHandler from './status-handler'
import ScrollDetector from './scroll-detector'

export default class MovieList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fetchedData: false
    }

    this.loadMore = this.loadMore.bind(this)
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

    fetchMovieList(this.state.currentPage + 1)
      .then(data => {
        console.log(`Loaded page ${data.page}/${data.total_pages}`)
        this.setState({
          currentPage: data.page,
          totalPages: data.total_pages,
          movies: Array.prototype.concat(this.state.movies, data.results),
          fetchedData: true,
          loadingMore: false,
          detectScroll: true
        })
      })
  }

  componentDidMount (props) {
    fetchMovieList()
      .then(data => {
        this.setState({
          currentPage: data.page,
          totalPages: data.total_pages,
          movies: data.results,
          fetchedData: true,
          detectScroll: true
        })
      })
  }

  componentWillUnmount () {
    this.setState({
      detectScroll: false
    })
  }

  render () {
    if (this.state.fetchedData !== true) return <StatusHandler status={this.state.fetchedData} />
    const { paneDidMount } = this
    return (
      <div ref={paneDidMount} className='row px-3'>
        <ScrollDetector active={this.state.detectScroll} onBottom={this.loadMore} />
        {this.state.movies.map((movie, index) => <MovieCard movie={movie} key={index} />)}
        { this.state.loadingMore ? <StatusHandler status={false} /> : ''}
      </div>
    )
  }
}
