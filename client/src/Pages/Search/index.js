import React, { Component } from 'react'
import DateTime from 'react-datetime'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

import './style.css'

import Map from '../../Components/Map'
import FixedMap from '../../Components/FixedMap'

import katherine from '../../images/katherine-smith.jpg'
import googlemap from '../../images/google-maps-promo.jpg'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trips: []
    }
  }

  componentDidMount = () => {
    axios.get('/trips/').then(response => {
      this.setState({
        trips: response.data
      })
    })
  }

  _search = event => {
    event.preventDefault()

    const form = event.target

    const formData = new FormData(form)
    console.log(formData)

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

  render() {
    return (
      <main className="search">
        <header>
          <h2>Search for a Ride</h2>
          <div className="actions">
            <Link to="/" className="action">
              Home
            </Link>
            <Link to="/search" className="action">
              Hitch Ride
            </Link>
            <Link to="/offerdrive" className="action">
              Offer Drive
            </Link>
            <Link to="/map" className="action">
              My Trips
            </Link>
            <Link to="/" className="action">
              Log Out
            </Link>
          </div>
        </header>
        <div className="wrapper">
          <div className="container">
            <div className="container-info">
              <form onSubmit={this._search} className="search-ride-form">
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
                <div>
                  <p className="locations">Departure Location:</p>
                  <Map
                    className="search-map"
                    onClick={this._clickDepartureMap}
                  />
                </div>
                <div>
                  <p className="locations">Arrival Location:</p>
                  <Map className="search-map" onClick={this._clickArrivalMap} />
                </div>
                <div className="departure-date-time">
                  <p>Departure Date and Time</p>
                  <DateTime inputProps={{ name: 'trip[depart_at]' }} />
                </div>
                <div className="arrival-date-time">
                  <p>Arrival Date and Time</p>
                  <DateTime inputProps={{ name: 'trip[arrive_at]' }} />
                </div>
                <div className="seats">
                  <label htmlFor="number_of_seats_available">
                    Number of seats available
                  </label>
                  <select name="trip[number_of_seats_available]">
                    <option />
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
                  <label htmlFor="price_per_seat">Price per seat $</label>
                  <input type="number" name="trip[price_per_seat]" />
                </div>
                <div className="create-drive-div">
                  <button className="create-drive">Search</button>
                </div>
              </form>
              {this.state.trips.map((trip, index) => {
                return (
                  <div className="card-preview" key={index}>
                    <div className="card-preview-header">
                      <img src={katherine} alt="pic" className="thumbnail" />
                      <div className="card-preview-text">
                        <p>Katherine Smith</p>
                        <p>
                          {moment(trip.departure_time).format('LT')} -{' '}
                          {moment(trip.arrival_time).format('LT')}
                        </p>
                      </div>
                    </div>
                    Departure Location:
                    <FixedMap
                      latitude={trip.departure_location_latitude}
                      longitude={trip.departure_location_longitude}
                    />
                    Arrival location:
                    <FixedMap
                      latitude={trip.arrival_location_latitude}
                      longitude={trip.arrival_location_longitude}
                    />
                    <div className="card-preview-secondary-text">
                      <p>
                        Departing from {trip.departure_location_address} at{' '}
                        {moment(trip.departure_time).format('LT')} on{' '}
                        {moment(trip.departure_date).format('MMMM Do YYYY')} and
                        arriving at {trip.arrival_location_address} at{' '}
                        {moment(trip.arrival_time).format('LT')} on{' '}
                        {moment(trip.arrival_date).format('MMMM Do YYYY')}.
                        Price per seat: ${trip.price_per_seat}
                      </p>
                    </div>
                    <div className="driver-profile-div">
                      <button className="driver-profile">DRIVER PROFILE</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Search