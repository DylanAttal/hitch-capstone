import React, { Component } from 'react'
import DateTime from 'react-datetime'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import { slide as Menu } from 'react-burger-menu'

import './style.css'

import history from '../../history'
import Map from '../../Components/Map'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trips: []
    }
  }

  _search = event => {
    event.preventDefault()

    const form = event.target

    const formData = new FormData(form)

    axios.post('/trips/search', formData).then(response => {
      this.setState({ trips: response.data })
    })
  }

  _clickDepartureMap = event => {
    const departure_location_longitude = event.lngLat[0]
    const departure_location_latitude = event.lngLat[1]

    this.setState({
      departure_location_longitude,
      departure_location_latitude
    })
  }

  _clickArrivalMap = event => {
    const arrival_location_longitude = event.lngLat[0]
    const arrival_location_latitude = event.lngLat[1]

    this.setState({
      arrival_location_longitude,
      arrival_location_latitude
    })
  }

  _bookRide = event => {
    event.preventDefault()

    const form = event.target

    const formData = new FormData(form)

    axios.post('/rides/create', formData).then(response => {
      history.push('/new_ride')
    })
  }

  render() {
    return (
      <main className="search">
        <header>
          <h2>Hitch Ride</h2>
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
                Hitch Ride
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
              <section className="searching">
                <form
                  onSubmit={this._search}
                  autoComplete="off"
                  className="search-ride-form"
                >
                  <input
                    type="hidden"
                    value={this.state.departure_location_longitude}
                    name="trip[departure_location_longitude]"
                  />
                  <input
                    type="hidden"
                    value={this.state.departure_location_latitude}
                    name="trip[departure_location_latitude]"
                  />
                  <input
                    type="hidden"
                    value={this.state.arrival_location_longitude}
                    name="trip[arrival_location_longitude]"
                  />
                  <input
                    type="hidden"
                    value={this.state.arrival_location_latitude}
                    name="trip[arrival_location_latitude]"
                  />
                  <section className="maps">
                    <div className="map-div-1">
                      <p className="locations">Departure Location</p>
                      <p className="sub-title">
                        <em>within 50 miles</em>
                      </p>
                      <Map
                        className="search-map"
                        onClick={this._clickDepartureMap}
                      />
                    </div>
                    <div className="map-div-2">
                      <p className="locations">Arrival Location</p>
                      <p className="sub-title">
                        <em>within 50 miles</em>
                      </p>
                      <Map
                        className="search-map"
                        onClick={this._clickArrivalMap}
                      />
                    </div>
                  </section>
                  <section className="datetimes">
                    <div className="departure-date-time">
                      <p className="datetime-title">Departure Date and Time</p>
                      <p className="sub-title-date">
                        <em>within 6 hours</em>
                      </p>
                      <DateTime
                        dateFormat="YYYY-MM-DD"
                        inputProps={{
                          name: 'trip[depart_at]',
                          className: 'datetime'
                        }}
                      />
                    </div>
                    <div className="arrival-date-time">
                      <p className="datetime-title">Arrival Date and Time</p>
                      <p className="sub-title-date">
                        <em>within 6 hours</em>
                      </p>
                      <DateTime
                        dateFormat="YYYY-MM-DD"
                        inputProps={{
                          name: 'trip[arrive_at]',
                          className: 'datetime'
                        }}
                      />
                    </div>
                  </section>
                  <div className="seats">
                    <label htmlFor="number_of_seats_available">
                      Number of seats available{' '}
                      <span className="smaller">
                        <em>or less</em>
                      </span>
                    </label>
                    <select name="trip[number_of_seats_available]">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                    </select>
                  </div>
                  <div className="price">
                    <label htmlFor="price_per_seat">
                      Price per seat{' '}
                      <span className="smaller">
                        <em>or less</em>
                      </span>{' '}
                      $
                    </label>
                    <input type="number" name="trip[price_per_seat]" />
                  </div>
                  <div className="create-drive-div">
                    <button className="search-button">SEARCH</button>
                  </div>
                </form>
              </section>
              <section className="results">
                {this.state.trips.map((trip, index) => {
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
                        <form onSubmit={this._bookRide}>
                          <Link to={`/people/${trip.driver_name}`}>
                            <button className="driver-profile">
                              DRIVER PROFILE
                            </button>
                          </Link>

                          <input
                            type="hidden"
                            name="ride[trip_id]"
                            value={trip.id}
                          />

                          <button type="submit" className="book-ride">
                            BOOK RIDE
                          </button>
                        </form>
                      </div>
                    </div>
                  )
                })}
              </section>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Search
