import React from 'react'
import { fetchMovieDetail } from '../data/api'
import StatusHandler from './status-handler'
import Img from 'react-image'
import noPoster from '../assets/no-poster.jpg'

export default class MovieDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fetchedData: false
    }
  }

  componentDidMount () {
    fetchMovieDetail(this.props.match.params.movieId)
      .then(movie => {
        this.setState({
          movie: movie,
          fetchedData: true
        })
      })
  }

  render () {
    if (this.state.fetchedData !== true) return <StatusHandler status={this.state.fetchedData} />
    const { movie } = this.state
    const fallbackImages = [
      ...Object.keys(movie.poster).map(size => movie.poster[size]).reverse(),
      ...Object.keys(movie.backdrop).map(size => movie.backdrop[size]).reverse(),
      noPoster
    ]
    const imgLoader = <div className='col-md-3 col-xs-12 d-flex justify-content-center align-items-center'><div class='spinner-border center' role='status' /></div>
    return (
      <div className='row mt-1 py-3'>        
        <Img className='col-md-3 col-xs-12 h-100' src={fallbackImages} loader={imgLoader} alt='Movie Poster' />
        <div className='col-md-6 col-xs-12 mx-1 mx-md-1'>
          <h2 className='mt-3 mt-md-2'>{movie.title}</h2>
          <h6>Release: {new Date(movie.release).toDateString()}</h6>
          <i>Genre: {movie.genres.join(', ')}</i>
          <p className='mt-2 text-primary justify-content-center'>Overview: {movie.overview}</p>
          {console.log(this.props)}
          <button onClick={this.props.history.goBack} class='btn btn-sm bottom btn-xs-block btn-outline-primary mt-2 align-self-bottom'>{`<< Go back`}</button>
        </div>
      </div>
    )
  }
}
