import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
  <div className='p-3 mt-1 col-md-3 col-12 align-text-center'>
    <h2 className='align-center'>{props.movie.title}</h2>
    <h6>Release: {new Date(props.movie.release_date).toDateString()}</h6>
    <i>Genre: {props.movie.genres.slice(0, 3).join(', ')}</i>
    <img className='my-2' src={props.movie.poster_path} style={{ maxWidth: '100%' }} />
    <Link className='button button-link' to={`/movie/${props.movie.id}`} >View Details...</Link>
  </div>
)
