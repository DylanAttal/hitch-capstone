import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Landing from './Pages/Landing'
import Profile from './Pages/Profile'
import Details from './Pages/Details'
import MapPage from './Pages/MapPage'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={MapPage} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/details" exact component={Details} />
          <Route path="/map" exact component={MapPage} />
        </>
      </Router>
    )
  }
}

export default App
