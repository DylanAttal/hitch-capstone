import React, { Component } from 'react'

import './style.css'

import Map from '../../Components/Map'

class MapPage extends Component {
  render() {
    return (
      <main className="mappage">
        <header>
          <h2>Departure and Arrival Locations</h2>
        </header>
        <Map />
      </main>
    )
  }
}

export default MapPage
