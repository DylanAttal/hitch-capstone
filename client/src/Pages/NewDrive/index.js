import React, { Component } from 'react'
import { Router, Switch, Route, Link } from 'react-router-dom'

import './style.css'

class NewDrive extends Component {
  render() {
    return (
      <div>
        <h1 className="thanks">Thanks for booking a drive!</h1>
        <h2 className="go-back">
          Go back to <Link to="/offerdrive">offering a drive</Link>.
        </h2>
      </div>
    )
  }
}

export default NewDrive
