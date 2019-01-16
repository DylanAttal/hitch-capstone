import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

import './style.css'

import katherine from '../../images/katherine-smith.jpg'

import auth from '../../auth'
import history from '../../history'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      person: {}
    }
  }

  componentWillMount = () => {
    // Guard clause to prevent non-logged-in people from accessing user profile
    if (!auth.isAuthenticated()) {
      history.replace('/login')
    }
  }

  componentDidMount = () => {
    axios.get('/people/current').then(response => {
      this.setState({
        person: response.data
      })
    })
  }

  render() {
    return (
      <main className="profile">
        <header>
          <h2>Profile</h2>
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
        </header>
        <div className="wrapper">
          <div className="picture">
            <img
              src={this.state.person.avatar_url}
              alt="user"
              className="profile-picture"
            />
          </div>
          <div className="container">
            <div className="container-info">
              <div className="name">
                <h2 className="profile-name">
                  <span className="first-name">
                    {this.state.person.first_name}
                  </span>{' '}
                  <span className="last-name">
                    {this.state.person.last_name}
                  </span>
                </h2>
              </div>
              <div className="bio">
                <p className="bio-info">{this.state.person.bio}</p>
              </div>
              <div className="email">
                <p className="email-info">{this.state.person.email}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
