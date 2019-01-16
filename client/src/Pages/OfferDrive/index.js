import React, { Component } from 'react'
import DateTime from 'react-datetime'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

import Map from '../../Components/Map'

import './style.css'

class OfferDrive extends Component {
  constructor(props) {
    super(props)

    this.state = {
      trips: []
    }
  }

  _departureDateChange = event => {
    this.setState({
      departureDate: event.target.value
    })
  }

  _arrivalDateChange = event => {
    this.setState({
      arrivalDate: event.target.value
    })
  }

  _submit = event => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    axios.post('/trips/create', formData).then(response => {
      this.setState({
        trips: response.data
      })
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
      <main className="offer-drive">
        <header>
          <h2>Offer Drive</h2>
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
              <form onSubmit={this._submit} autoComplete="off">
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
                  <p className="locations">Departure Location</p>
                  <Map
                    className="offer-drive-map"
                    onClick={this._clickDepartureMap}
                  />
                </div>
                <div>
                  <p className="locations">Arrival Location</p>
                  <Map
                    className="offer-drive-map"
                    onClick={this._clickArrivalMap}
                  />
                </div>
                <div className="departure-date-time">
                  <p>Departure Date and Time</p>
                  <DateTime
                    dateFormat="YYYY-MM-DD"
                    inputProps={{ name: 'trip[depart_at]' }}
                  />
                </div>
                <div className="arrival-date-time">
                  <p>Arrival Date and Time</p>
                  <DateTime
                    dateFormat="YYYY-MM-DD"
                    inputProps={{ name: 'trip[arrive_at]' }}
                  />
                </div>
                <div className="seats">
                  <label htmlFor="number_of_seats_available">
                    Number of seats available
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
                  <label htmlFor="price_per_seat">Price per seat $</label>
                  <input type="number" name="trip[price_per_seat]" />
                </div>
                <div className="create-drive-div">
                  <button className="create-drive">Offer Drive</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default OfferDrive
