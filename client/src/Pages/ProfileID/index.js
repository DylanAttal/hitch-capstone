import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { slide as Menu } from 'react-burger-menu'

import './style.css'

class ProfileID extends Component {
  constructor(props) {
    super(props)

    this.state = {
      person: {}
    }
  }

  componentDidMount = () => {
    axios.get(`/people/${this.props.match.params.id}`).then(response => {
      this.setState({
        person: response.data
      })
    })
  }

  render() {
    return (
      <main className="profile-id">
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
          <div className="hamburger-menu">
            <Menu
              right
              onStateChange={this._clickMenu}
              isOpen={this.state.isOpen}
            >
              <Link className="action-burger" to="/people/current">
                Profile
              </Link>
              <Link className="action-burger" to="/search">
                Hitch Drive
              </Link>
              <Link className="action-burger" to="/offerdrive">
                Offer Drive
              </Link>
              <Link className="action-burger" to="/mytrips">
                My Trips
              </Link>
              <Link className="action-burger" to="/logout">
                Log Out
              </Link>
            </Menu>
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
              <div className="email">
                <p className="email-info">{this.state.person.email}</p>
              </div>
              <div className="age">
                <p className="age-info">{this.state.person.age} years old</p>
              </div>
              <div className="bio">
                <p className="bio-info">{this.state.person.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default ProfileID
