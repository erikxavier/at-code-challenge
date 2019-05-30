import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootswatch/dist/lux/bootstrap.min.css'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Navbar from './components/navbar'
import MovieList from './components/movie-list'
import MovieDetail from './components/movie-detail'
import bg from './assets/castle1.png'

const Header = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: contain;
`

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Navbar />
          <div className="container background-xs-none">
            <Header className="jumbotron my-2">
              <h1 className='text-center'>Awesome Upcoming Movies</h1>
              <h5 className='text-center'>BROUGHT TO YOU BY CASTLE MEDIA GROUP</h5>
            </Header>
            <Switch>
              <Route exact path='/' component={MovieList} />
              <Route path='/movie/:movieId' component={MovieDetail}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
