import React, { Component } from 'react'
import DateTime from 'react-datetime'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'

import Map from '../../Components/Map'

import './style.css'

class OfferDrive extends Component {
  constructor(props) {
    super(props)

    this.state = {
      people: [],
      trips: []
    }
  }

  componentDidMount = () => {
    axios.get('/people/').then(response => {
      this.setState({
        people: response.data
      })
    })
    axios.get('/trips/').then(response => {
      this.setState({
        trips: response.data
      })
    })
  }

  render() {
    return (
      <main className="search">
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
              <div>
                <p className="locations">Departure and Arrival Locations</p>
                <Map className="search-map" />
              </div>
              <div className="departure-date-time">
                <p>Departure Date and Time</p>
                <DateTime />
              </div>
              <div className="arrival-date-time">
                <p>Arrival Date and Time</p>
                <DateTime />
              </div>
              <div className="seats">
                <label htmlFor="number-of-seats">
                  Number of seats available
                </label>
                <select name="number-of-seats">
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
                <label htmlFor="price-per-seat">Price per seat $</label>
                <input type="number" />
              </div>
              <div className="comments">
                <textarea
                  className="comments-area"
                  placeholder="Additional comments"
                />
              </div>
              <div className="create-drive-div">
                <button className="create-drive">Offer Drive</button>
              </div>
              <button>Search</button>
              {this.state.people.map((person, index) => {
                return (
                  <p key={index}>
                    {person.first_name} {person.last_name}
                  </p>
                )
              })}
              {this.state.trips.map((trip, index) => {
                return (
                  <p key={index}>
                    Departing from {trip.departure_location_address} at{' '}
                    {moment(trip.departure_time).format('LT')} on{' '}
                    {moment(trip.departure_date).format('MMMM Do YYYY')} and
                    arriving at {trip.arrival_location_address} at{' '}
                    {moment(trip.arrival_time).format('LT')} on{' '}
                    {moment(trip.arrival_date).format('MMMM Do YYYY')}.
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default OfferDrive
