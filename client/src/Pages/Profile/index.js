import React, { Component } from 'react'
import './style.css'

import katherine from '../../images/katherine-smith.jpg'

class Profile extends Component {
  render() {
    return (
      <main className="profile">
        <div className="header">
          <h2>Profile</h2>
        </div>
        <div className="wrapper">
          <div className="picture">
            <img
              src={katherine}
              alt="picture of user"
              className="profile-picture"
            />
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
          <p className="blank">x</p>
        </div>
      </main>
    )
  }
}

export default Profile
