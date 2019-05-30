import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <nav className='navbar py-md-2 py-2 navbar-expand-md navbar-dark bg-primary'>
        <Link to='/' className='navbar-brand h2 my-0 align-middle'>
            <i className='fas fa-chess-rook fa-lg' /> Movie Castle
        </Link>
        <form className='form-inline my-lg-0 nav navbar-nav ml-auto w-100 justify-content-end'>
            <input className='form-control form-control-sm mr-sm-2' type='search' placeholder='Search movie' aria-label='Search' />
            <button className='btn btn-sm btn-xs-block btn-outline-info mt-2 my-md-0 d-inline' type='submit'>Search</button>
        </form>
    </nav>
)