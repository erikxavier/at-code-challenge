import React from 'react'
import { Link } from 'react-router-dom'
import noPoster from '../assets/no-poster.jpg'
import Img from 'react-image'

export default (props) => {
  const { movie } = props
  const fallbackImages = [
    ...Object.keys(movie.poster).map(size => movie.poster[size]).reverse(),
    ...Object.keys(movie.backdrop).map(size => movie.backdrop[size]).reverse(),
    noPoster
  ]
  const imgLoader = <div className='col-md-3 col-12 d-flex justify-content-center align-items-center'><div className='spinner-border center' role='status' /></div>
  return (
    <div className='p-3 mt-auto col-md-3 col-12'>
      <h5 className='align-center'>{movie.title}</h5>
      <h6>Release: {new Date(movie.release).toDateString()}</h6>
      <i>Genre: {movie.genres.slice(0, 2).join(', ')}</i>
      <Link to={`/movie/${movie.id}`} >
        <Img className='my-2' src={[movie.poster['w500'], ...fallbackImages]} loader={imgLoader} alt={`${movie.title} poster`} style={{ maxWidth: '100%' }} />
        <p className='button button-link'> View Details...</p>
      </Link>
    </div>
  )
}
