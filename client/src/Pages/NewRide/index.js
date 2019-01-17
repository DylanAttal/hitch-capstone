import React, { Component } from 'react'
import { Router, Switch, Route, Link } from 'react-router-dom'

import './style.css'

class NewRide extends Component {
  render() {
    return (
      <div>
        <h1>Thanks for booking a ride!</h1>
        <h2>
          Go back to <Link to="/search">searching for a ride</Link>.
        </h2>
      </div>
    )
  }
}

export default NewRide
