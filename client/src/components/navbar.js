import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      queryString: ''
    }
  }

  onInputChange (e) {
    this.setState({
      queryString: e.target.value
    })
  }

  render () {
    return (
      <nav className='navbar py-md-2 py-2 navbar-expand-md navbar-dark bg-primary'>
        <Link to='/' className='navbar-brand h2 my-0 align-middle'>
          <i className='fas fa-chess-rook fa-lg' /> Movie Castle
        </Link>
        <form className='form-inline my-lg-0 nav navbar-nav ml-auto w-100 justify-content-end'>
          <input onChange={this.onInputChange.bind(this)} className='form-control form-control-sm mr-sm-2' type='search' placeholder='Search movie' aria-label='Search' />
          <Link to={`/search/${this.state.queryString}`}><button  className='btn btn-sm btn-xs-block btn-outline-info mt-2 my-md-0 d-inline'>Search</button></Link>
        </form>
      </nav>
    )
  }
}

export default NavBar
