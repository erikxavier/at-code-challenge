import React from 'react'
import 'bootswatch/dist/lux/bootstrap.min.css'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css'

function App () {
  return (
    <div className='App'>
      <nav class='navbar navbar-expand-lg navbar-dark bg-primary'>
        <a class='navbar-brand' href='#'>
          <i class='fas fa-chess-rook' /> Movie Castle
        </a>
        <form class='form-inline my-2 my-lg-0 nav navbar-nav ml-auto w-100 justify-content-end'>
          <input class='form-control form-control-sm mr-sm-2' type='search' placeholder='Search movie' aria-label='Search' />
          <button class='btn btn-sm btn-xs-block btn-outline-info mt-2 my-md-0 d-inline' type='submit'>Search</button>
        </form>
      </nav>
    </div>
  )
}

export default App
