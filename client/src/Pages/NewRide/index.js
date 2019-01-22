import React, { Component } from 'react'
import { Router, Switch, Route, Link } from 'react-router-dom'
import carWithDriver from '../../images/Car_with_Driver-Silhouette.svg.png'

import './style.css'

class NewRide extends Component {
  render() {
    return (
      <div className="new">
        <h1 className="thanks">Thanks for booking a ride!</h1>
        <h2 className="go-back">
          Go back to{' '}
          <Link className="go-back-link" to="/search">
            searching for a ride
          </Link>
          .
        </h2>
        <img src={carWithDriver} className="car_with_driver" />
      </div>
    )
  }
}

export default NewRide
