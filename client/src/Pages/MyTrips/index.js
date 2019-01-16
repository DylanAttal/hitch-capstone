import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

import './style.css'

import katherine from '../../images/katherine-smith.jpg'

import auth from '../../auth'
import history from '../../history'

class MyTrips extends Component {
  constructor(props) {
    super(props)

    this.state = {
      person: {},
      trips: []
    }
  }

  componentWillMount = () => {
    // Guard clause to prevent non-logged-in people from accessing my-trips
    if (!auth.isAuthenticated()) {
      history.replace('/login')
    }
  }

  componentDidMount = () => {
    axios.get('/people/current').then(response => {
      this.setState(
        {
          person: response.data
        },
        console.log(response.data)
      )
    })
    axios.get('/trips/').then(response => {
      this.setState(
        {
          trips: response.data
        },
        console.log(response.data)
      )
    })
  }

  render() {
    return (
      <main className="my-trips">
        <header>
          <h2>My Trips</h2>
          <div className="actions">
            <Link to="/people/current" className="action">
              Profile
            </Link>
            <Link to="/search" className="action">
              Hitch Ride
            </Link>
            <Link to="/offerdrive" className="action">
              Offer Drive
            </Link>
            <Link to="/mytrips" className="action">
              My Trips
            </Link>
            <Link to="/logout" className="action">
              Log Out
            </Link>
          </div>
        </header>
        <div className="wrapper">
          <div className="container">
            <div className="container-info">
              <div className="rides">
                <h2 className="title">My Rides</h2>
                <div className="card-preview">
                  <div className="card-preview-header">
                    <img src={katherine} alt="pic" className="thumbnail" />
                    <div className="card-preview-text">
                      <p>Driver: DRIVER NAME</p>
                    </div>
                  </div>
                  <div className="card-preview-secondary-text">
                    <p>
                      Departing from an ADDRESS at a TIME on a DATE and arriving
                      at an ADDRESS at a TIME on a DATE.
                    </p>
                    <p>Price per seat: $PRICE</p>
                    <p>Seats available: SEATS</p>
                  </div>
                  <div className="driver-profile-div">
                    <Link to="/" className="driver-profile">
                      DRIVER PROFILE
                    </Link>
                  </div>
                </div>
                <div className="card-preview">
                  <div className="card-preview-header">
                    <img src={katherine} alt="pic" className="thumbnail" />
                    <div className="card-preview-text">
                      <p>Driver: DRIVER NAME</p>
                    </div>
                  </div>
                  <div className="card-preview-secondary-text">
                    <p>
                      Departing from an ADDRESS at a TIME on a DATE and arriving
                      at an ADDRESS at a TIME on a DATE.
                    </p>
                    <p>Price per seat: $PRICE</p>
                    <p>Seats available: SEATS</p>
                  </div>
                  <div className="driver-profile-div">
                    <Link to="/" className="driver-profile">
                      DRIVER PROFILE
                    </Link>
                  </div>
                </div>
                <div className="card-preview">
                  <div className="card-preview-header">
                    <img src={katherine} alt="pic" className="thumbnail" />
                    <div className="card-preview-text">
                      <p>Driver: DRIVER NAME</p>
                    </div>
                  </div>
                  <div className="card-preview-secondary-text">
                    <p>
                      Departing from an ADDRESS at a TIME on a DATE and arriving
                      at an ADDRESS at a TIME on a DATE.
                    </p>
                    <p>Price per seat: $PRICE</p>
                    <p>Seats available: SEATS</p>
                  </div>
                  <div className="driver-profile-div">
                    <Link to="/" className="driver-profile">
                      DRIVER PROFILE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default MyTrips
