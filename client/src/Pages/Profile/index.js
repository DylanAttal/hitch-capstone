import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './style.css'

import katherine from '../../images/katherine-smith.jpg'

class Profile extends Component {
  render() {
    return (
      <main className="profile">
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
          <div className="picture">
            <img src={katherine} alt="user" className="profile-picture" />
          </div>
          <div className="container">
            <div className="container-info">
              <div className="name">
                <h2 className="profile-name">
                  <span className="first-name">Katherine</span>{' '}
                  <span className="last-name">Smith</span>
                </h2>
              </div>
              <div className="bio">
                <p className="bio-info">
                  I'm Katherine, and I'm a junior at the University of Florida
                  (Go Gators!) majoring in Chemistry. I play volleyball on the
                  women's intramural team. I enjoy hiking, going to the beach,
                  and visiting Florida's natural springs.
                </p>
              </div>
              <div className="email">
                <p className="email-info">katherine.smith@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
