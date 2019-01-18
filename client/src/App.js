import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Landing from './Pages/Landing'
import Profile from './Pages/Profile'
import ProfileID from './Pages/ProfileID'
import Search from './Pages/Search'
import OfferDrive from './Pages/OfferDrive'
import MyTrips from './Pages/MyTrips'
import NewRide from './Pages/NewRide'
import NewDrive from './Pages/NewDrive'

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
              auth.handleAuthentication(() => {
                axios.defaults.headers.common = {
                  Authorization: auth.authorizationHeader()
                }
              })

              return <></>
            }}
          />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/people/current" exact component={Profile} />
            <Route path="/people/:id" exact component={ProfileID} />
            <Route path="/search" exact component={Search} />
            <Route path="/offerdrive" exact component={OfferDrive} />
            <Route path="/mytrips" exact component={MyTrips} />
            <Route path="/new_ride" exact component={NewRide} />
            <Route path="/new_drive" exact component={NewDrive} />
          </Switch>
        </>
      </Router>
    )
  }
}

export default App
