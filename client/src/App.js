import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Landing from './Pages/Landing'
import Profile from './Pages/Profile'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={Profile} />
          <Route path="/profile" exact component={Profile} />
        </>
      </Router>
    )
  }
}

export default App
