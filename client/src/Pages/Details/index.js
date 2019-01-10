import React, { Component } from 'react'
import DateTime from 'react-datetime'
import './style.css'

class Details extends Component {
  render() {
    return (
      <main className="details">
        <div className="header">
          <h2>Details</h2>
        </div>
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
              <div className="passengers">
                <label For="number-of-passengers">Number of passengers</label>
                <select name="number-of-passengers">
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
