import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import { slide as Menu } from 'react-burger-menu'

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
          <div className="hamburger-menu">
            <Menu
              right
              onStateChange={this._clickMenu}
              isOpen={this.state.isOpen}
            >
              <Link className="action-burger" to="/people/current">
                Profile
              </Link>
              <Link className="action-burger" to="/search">
                Hitch Drive
              </Link>
              <Link className="action-burger" to="/offerdrive">
                Offer Drive
              </Link>
              <Link className="action-burger" to="/mytrips">
                My Trips
              </Link>
              <Link className="action-burger" to="/logout">
                Log Out
              </Link>
            </Menu>
          </div>
        </header>
        <div className="wrapper">
          <div className="container">
            <div className="container-info">
              <div className="drives">
                <h2 className="title">My Drives</h2>
                <div className="drives-cards">
                  {this.state.person.drives.map((trip, index) => (
                    <div className="card-preview" key={index}>
                      <div className="card-preview-header">
                        <img
                          src={trip.driver_avatar_url}
                          alt="pic"
                          className="thumbnail"
                        />
                        <div className="card-preview-text">
                          <p className="driver-name">
                            Driver: {trip.driver_first_name}{' '}
                            {trip.driver_last_name}
                          </p>
                        </div>
                      </div>
                      <div className="card-preview-secondary-text">
                        <p>
                          <strong>Departing from </strong>
                          {trip.departure_location_address}.
                          <br />
                          <strong>Arriving at </strong>
                          {trip.arrival_location_address}.
                          <br />
                          <br />
                          <strong>Departure date:</strong>{' '}
                          {moment(trip.depart_at).format('MMMM Do YYYY')}.
                          <br />
                          <strong>Arrival date:</strong>{' '}
                          {moment(trip.arrive_at).format('MMMM Do YYYY')}.
                          <br />
                          <br />
                          <strong>Departure time:</strong>{' '}
                          {moment(trip.depart_at).format('LT')}.
                          <br />
                          <strong>Arrival time: </strong>
                          {moment(trip.arrive_at).format('LT')}.
                        </p>
                        <p>
                          <strong>Price per seat:</strong> $
                          {trip.price_per_seat}
                        </p>
                        <p>
                          <strong>Seats available:</strong>{' '}
                          {trip.number_of_seats_available}
                        </p>
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
              </div>
              <div className="rides">
                <h2 className="title">My Rides</h2>
                <div className="rides-cards">
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
                            <p className="driver-name">
                              Driver: {trip.driver_first_name}{' '}
                              {trip.driver_last_name}
                            </p>
                          </div>
                        </div>
                        <div className="card-preview-secondary-text">
                          <p>
                            <strong>Departing from </strong>
                            {trip.departure_location_address}.
                            <br />
                            <strong>Arriving at </strong>
                            {trip.arrival_location_address}.
                            <br />
                            <br />
                            <strong>Departure date:</strong>{' '}
                            {moment(trip.depart_at).format('MMMM Do YYYY')}.
                            <br />
                            <strong>Arrival date:</strong>{' '}
                            {moment(trip.arrive_at).format('MMMM Do YYYY')}.
                            <br />
                            <br />
                            <strong>Departure time:</strong>{' '}
                            {moment(trip.depart_at).format('LT')}.
                            <br />
                            <strong>Arrival time: </strong>
                            {moment(trip.arrive_at).format('LT')}.
                          </p>
                          <p>
                            <strong>Price per seat:</strong> $
                            {trip.price_per_seat}
                          </p>
                          <p>
                            <strong>Seats available:</strong>{' '}
                            {trip.number_of_seats_available}
                          </p>
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
        </div>
      </main>
    )
  }
}

export default MyTrips
