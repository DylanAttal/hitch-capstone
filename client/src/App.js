import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Landing from './Pages/Landing'
import Profile from './Pages/Profile'
import OfferDrive from './Pages/OfferDrive'
import MapPage from './Pages/MapPage'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={OfferDrive} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/offerdrive" exact component={OfferDrive} />
          <Route path="/map" exact component={MapPage} />
        </>
      </Router>
    )
  }
}

export default App
