import React, { Component } from 'react'
import DateTime from 'react-datetime'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Map from '../../Components/Map'

import './style.css'

class OfferDrive extends Component {
  render() {
    return (
      <main className="offer-drive">
        <header>
          <h2>Offer Drive</h2>
          <div className="actions">
            <Link to="/" className="action">
              Home
            </Link>
            <Link to="/map" className="action">
              Hitch Ride
            </Link>
            <Link to="/map" className="action">
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
                <Map className="offer-drive-map" />
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
                  <option>n/a</option>
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
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default OfferDrive
