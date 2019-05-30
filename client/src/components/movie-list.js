import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fetchMovieList } from '../data/api'

export default class MovieList extends Component {
    constructor(props) {
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

    render() {
        if (!this.state.movies) return (<h2>Loading</h2>)
        return (
            <div className='row px-3'>
                {this.state.movies.map((movie) => <MovieCard movie={movie} />)}
            </div>
        )
    }
}

const MovieCard = (props) => (
    <div className="p-3 mt-1 col-md-3 col-12 align-text-center">
        <h2 className='align-center'>{props.movie.title}</h2>
        <h6>Release: {new Date(props.movie.release_date).toDateString()}</h6>
        <i>Genre: {props.movie.genres.slice(0, 3).join(', ')}</i>
        <img className='my-1' src={props.movie.poster_path} style={{ maxWidth: '100%' }} />
        <Link className='button button-link my-1' to={`/movie/${props.movie.id}`} >View Details...</Link>
    </div>
)
