import React, { Component } from 'react'
import MovieCard from './movie-card'
import { fetchMovieList } from '../data/api'
import StatusHandler from './status-handler'

export default class MovieList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fetchedData: false
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.loadMore = this.loadMore.bind(this)
  }

  handleScroll() {
    if (this.state.loadingMore) return    
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
    const windowBottom = windowHeight + window.pageYOffset
    if (windowBottom >= docHeight) {
      this.loadMore()
    } else {
      console.log('not bottom')
    }
  }

  loadMore() {    
    console.log('loading more')
    window.removeEventListener('scroll', this.handleScroll)    
    this.setState({
      ...this.state,
      loadingMore: true
    })
    fetchMovieList(this.state.currentPage + 1)
      .then(data => {
        this.setState({
          currentPage: data.page,
          totalPages: data.total_pages,
          movies: Array.prototype.concat(this.state.movies, data.results),
          fetchedData: true,
          loadingMore: false
        })
      })
      if (this.state.currentPage < this.state.totalPages) window.addEventListener('scroll', this.handleScroll)
  }

  componentDidMount(props) {
    fetchMovieList()
      .then(data => {
        this.setState({
          currentPage: data.page,
          totalPages: data.total_pages,
          movies: data.results,
          fetchedData: true
        })
      })
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    if (this.state.fetchedData !== true) return <StatusHandler status={this.state.fetchedData} />
    const { paneDidMount } = this
    return (
      <div ref={paneDidMount} className='row px-3'>
        {this.state.movies.map((movie, index) => <MovieCard movie={movie} key={index} />)}
        { this.state.loadingMore ? <StatusHandler status={false} /> : ''}
      </div>
    )
  }
}
