import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

import './style.css'

import auth from '../../auth'
import history from '../../history'

class MyTrips extends Component {
  constructor(props) {
    super(props)

    this.state = {
      person: null
    }
  }

  componentWillMount = () => {
    // Guard clause to prevent non-logged-in people from accessing my-trips
    if (!auth.isAuthenticated()) {
      history.replace('/login')
    }
  }

  componentDidMount = () => {
    this.loadTrips()
  }

  loadTrips = () => {
    axios.get('/people/current').then(response => {
      this.setState({
        person: response.data
      })
    })
  }

  deleteAlbum = (album_id, event) => {
    event.preventDefault()

    axios.delete(`/api/albums/${album_id}`).then(response => {
      this.loadAlbums()
    })
  }

  _deleteDrive = (trip_id, event) => {
    axios.delete(`/trips/delete/${trip_id}`).then(response => {
      this.loadTrips()
    })
  }

  _cancelRide = (trip_id, event) => {
    axios.delete(`/rides/delete/${trip_id}`).then(response => {
      this.loadTrips()
    })
  }

  render() {
    if (!this.state.person) {
      return <div>Loading...</div>
    }

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
              <div className="drives">
                <h2 className="title">My Drives</h2>
                {this.state.person.drives.map((trip, index) => (
                  <div className="card-preview" key={index}>
                    <div className="card-preview-header">
                      <img
                        src={trip.driver_avatar_url}
                        alt="pic"
                        className="thumbnail"
                      />
                      <div className="card-preview-text">
                        <p>
                          Driver: {trip.driver_first_name}{' '}
                          {trip.driver_last_name}
                        </p>
                      </div>
                    </div>
                    <div className="card-preview-secondary-text">
                      <p>
                        Departing from {trip.departure_location_address} at{' '}
                        {moment(trip.depart_at).format('LT')} on{' '}
                        {moment(trip.depart_at).format('MMMM Do YYYY')} and
                        arriving {trip.arrival_location_address} at{' '}
                        {moment(trip.arrive_at).format('LT')} on{' '}
                        {moment(trip.arrive_at).format('MMMM Do YYYY')}.
                      </p>
                      <p>Price per seat: ${trip.price_per_seat}</p>
                      <p>Seats offered: {trip.number_of_seats_available}</p>
                    </div>
                    <div className="driver-profile-div">
                      <button
                        className="cancel-drive"
                        onClick={this._deleteDrive.bind(this, trip.id)}
                      >
                        DELETE DRIVE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rides">
                <h2 className="title">My Rides</h2>
                {this.state.person.rides.map((trip, index) => {
                  return (
                    <div className="card-preview" key={index}>
                      <div className="card-preview-header">
                        <img
                          src={trip.driver_avatar_url}
                          alt="pic"
                          className="thumbnail"
                        />
                        <div className="card-preview-text">
                          <p>
                            Driver: {trip.driver_first_name}{' '}
                            {trip.driver_last_name}
                          </p>
                        </div>
                      </div>
                      <div className="card-preview-secondary-text">
                        <p>
                          Departing from {trip.departure_location_address} at{' '}
                          {moment(trip.depart_at).format('LT')} on{' '}
                          {moment(trip.depart_at).format('MMMM Do YYYY')} and
                          arriving {trip.arrival_location_address} at{' '}
                          {moment(trip.arrive_at).format('LT')} on{' '}
                          {moment(trip.arrive_at).format('MMMM Do YYYY')}.
                        </p>
                        <p>Price per seat: ${trip.price_per_seat}</p>
                        <p>Seats offered: {trip.number_of_seats_available}</p>
                      </div>
                      <div className="driver-profile-div">
                        <button
                          className="cancel-drive"
                          onClick={this._cancelRide.bind(this, trip.id)}
                        >
                          CANCEL RIDE
                        </button>
                        <Link to={`/people/${trip.driver_name}`}>
                          <button className="driver-profile">
                            DRIVER PROFILE
                          </button>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default MyTrips
