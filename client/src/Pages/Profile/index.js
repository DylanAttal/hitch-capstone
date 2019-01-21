import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './style.css'

import auth from '../../auth'
import history from '../../history'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      person: null
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

  _updateProfile = event => {
    event.preventDefault()

    const form = event.target

    const formData = new FormData(form)

    axios.put('/people/current', formData).then(response => {
      this.setState({
        person: response.data
      })
    })
  }

  render() {
    if (!this.state.person) {
      return <div>Loading...</div>
    }

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
              <div className="email">
                <p className="email-info">{this.state.person.email}</p>
              </div>
              <div className="age-div">
                <p>{this.state.person.age} years old</p>
              </div>
              <div className="bio-div">
                <p>{this.state.person.bio}</p>
              </div>
              <form onSubmit={this._updateProfile} id="update-profile-form">
                <label
                  htmlFor="age"
                  className={!this.state.person.age ? '' : 'hidden'}
                >
                  Age
                </label>
                <input
                  name="person[age]"
                  type="number"
                  placeholder="age"
                  className={!this.state.person.age ? 'age' : 'hidden'}
                />
                <label
                  htmlFor="bio"
                  className={!this.state.person.bio ? 'age' : 'hidden'}
                >
                  Bio
                </label>
                <textarea
                  name="person[bio]"
                  form="update-profile-form"
                  placeholder="Enter bio here"
                  className={!this.state.person.bio ? 'bio' : 'hidden'}
                />
                <button
                  className={
                    !this.state.person.bio && !this.state.person.age
                      ? 'bio'
                      : 'hidden'
                  }
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Profile
