import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'

import './style.css'

import katherine from '../../images/katherine-smith.jpg'
import Axios from 'axios'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      people: [{}]
    }
  }

  componentDidMount = () => {
    axios.get('/people/').then(response => {
      this.setState({
        people: response.data
      })
    })
    console.log(this.props)
  }

  render() {
    const id = this.props.match.params.id

    return (
      <main className="profile">
        <header>
          <h2>Profile</h2>
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
                  <span className="first-name">
                    {this.state.people[0].first_name}
                  </span>{' '}
                  <span className="last-name">
                    {this.state.people[0].last_name}
                  </span>
                </h2>
              </div>
              <div className="bio">
                <p className="bio-info">{this.state.people[0].bio}</p>
              </div>
              <div className="email">
                <p className="email-info">{this.state.people[0].email}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
