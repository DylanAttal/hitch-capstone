import React, { Component } from 'react'
import DateTime from 'react-datetime'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './style.css'

class Details extends Component {
  render() {
    return (
      <main className="details">
        <header>
          <h2>Profile</h2>
          <div className="actions">
            <Link to="/" className="action">
              Home
            </Link>
            <Link to="/map" className="action">
              Hitch a Ride
            </Link>
            <Link to="/map" className="action">
              Offer a Drive
            </Link>
            <Link to="/map" className="action">
              My Trips
            </Link>
            <button className="action">Log Out</button>
          </div>
        </header>
        <div className="wrapper">
          <div className="container">
            <div className="container-info">
              <div className="departure-date-time">
                <p>Departure Date and Time:</p>
                <DateTime />
              </div>
              <div className="arrival-date-time">
                <p>Arrival Date and Time:</p>
                <DateTime />
              </div>
              <div className="ride-or-drive">
                <label htmlFor="ride-or-drive">
                  Are you riding or driving?
                </label>
                <select name="ride-or-drive">
                  <option>n/a</option>
                  <option>Riding</option>
                  <option>Driving</option>
                </select>
              </div>
              <div className="seats">
                <label htmlFor="number-of-seats">Number of passengers</label>
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
              <div className="passengers">
                <label htmlFor="number-of-passengers">Number of seats</label>
                <select name="number-of-passengers">
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
              <div className="comments">
                <textarea
                  className="comments-area"
                  placeholder="Additional comments"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Details
