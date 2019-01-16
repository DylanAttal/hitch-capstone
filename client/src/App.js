import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

import Landing from './Pages/Landing'
import Profile from './Pages/Profile'
import Search from './Pages/Search'
import OfferDrive from './Pages/OfferDrive'
import CreateProfile from './Pages/CreateProfile'

import auth from './auth'

import history from './history'

class App extends Component {
  componentWillMount() {
    if (auth.isAuthenticated()) {
      axios.defaults.headers.common = {
        Authorization: auth.authorizationHeader()
      }
    }
  }

  render() {
    return (
      <Router history={history}>
        <>
          <Route path="/login" render={() => auth.login()} />
          <Route
            path="/logout"
            render={() => {
              auth.logout()

              return <></>
            }}
          />
          <Route
            path="/callback"
            render={() => {
              auth.handleAuthentication(() => {})

              return <></>
            }}
          />
          <Route path="/" exact component={Landing} />
          <Route path="/createprofile" exact component={CreateProfile} />
          <Route path="/people/current" exact component={Profile} />
          <Route path="/search" exact component={Search} />
          <Route path="/offerdrive" exact component={OfferDrive} />
        </>
      </Router>
    )
  }
}

export default App
