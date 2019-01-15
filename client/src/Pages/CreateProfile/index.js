import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './style.css'

import user from '../../images/user-icon.svg'

class CreateProfile extends Component {
  render() {
    return (
      <main className="create-profile">
        <header>
          <h2>Create Profile</h2>
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
          <form>
            <div className="form-container">
              <div className="picture-div">
                <label For="picture">Profile Picture</label>
                <input
                  type="image"
                  alt="pic"
                  name="picture"
                  src={user}
                  className="profile-pic"
                  required
                />
              </div>
              <label For="first-name">First Name</label>
              <input type="text" name="first-name" required />

              <label For="last-name">Last Name</label>
              <input type="text" name="last-name" required />

              <label For="phone-number">Phone Number</label>
              <input type="number" name="phone-number" required />

              <label For="email">Email</label>
              <input type="text" name="email" required />

              <label For="password">Password</label>
              <input type="password" name="password" required />
            </div>
          </form>
        </div>
      </main>
    )
  }
}

export default CreateProfile
