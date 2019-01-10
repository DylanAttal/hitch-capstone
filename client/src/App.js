import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Landing from './Pages/Landing'
import Profile from './Pages/Profile'
import Details from './Pages/Details'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={Details} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/details" exact component={Details} />
        </>
      </Router>
    )
  }
}

export default App
