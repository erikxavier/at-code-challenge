import React from 'react'
import { fetchMovieDetail } from "../data/api";
import StatusHandler from './status-handler'

export default class MovieDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fetchedData: false
        }
    }

    componentDidMount(props) {
        fetchMovieDetail()
            .then(movie => {
                this.setState({
                    movie: movie,
                    fetchedData: true
                })
            })
    }
    render() {
        if (this.state.fetchedData !== true) return <StatusHandler status={this.state.fetchedData} />
        const { movie } = this.state
        return (
            <div className="row mt-1 py-3">
                <img className='col-md-3 col-xs-12 h-100' src={movie.poster_path} alt='Movie Poster' />
                <div className='col-md-6 col-xs-12 mx-1 mx-md-1'>
                    <h2 className='mt-3 mt-md-2'>{movie.title}</h2>
                    <h6>Release: {new Date(movie.release_date).toDateString()}</h6>
                    <i>Genre: {movie.genres.join(', ')}</i>
                    <p className='mt-2 text-primary justify-content-center'>Overview: {movie.overview}</p>
                    <button type="button" class="btn btn-sm bottom btn-xs-block btn-outline-primary mt-2 align-self-bottom">{`<< Go back`}</button>
                </div>
            </div>
        )
    }
}