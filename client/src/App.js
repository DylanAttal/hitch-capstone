import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Landing from './Pages/Landing'
import Profile from './Pages/Profile'
import Search from './Pages/Search'
import OfferDrive from './Pages/OfferDrive'
import MapPage from './Pages/MapPage'
import CreateProfile from './Pages/CreateProfile'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={CreateProfile} />
          <Route path="/createprofile" exact component={CreateProfile} />
          <Route path="/profile/:id" exact component={Profile} />
          <Route path="/search" exact component={Search} />
          <Route path="/offerdrive" exact component={OfferDrive} />
          <Route path="/map" exact component={MapPage} />
        </>
      </Router>
    )
  }
}

export default App
