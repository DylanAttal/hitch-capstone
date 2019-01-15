import React, { Component } from 'react'
import MapGL, { Marker } from 'react-map-gl'

import './style.css'

import CityPin from './city-pin'

const TOKEN =
  'pk.eyJ1IjoiZHlsYW4xMSIsImEiOiJjanFvNDZzbW03cG9vNDNwZHAwY2oxcXA5In0.2igPWwt2__U0_iqUvq6rMg'

class FixedMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      droppedMarker: true,
      viewport: {
        latitude: parseInt(27.7676),
        longitude: parseInt(-82.6403),
        zoom: 4.5,
        bearing: 0,
        pitch: 0
      }
    }
  }

  _updateViewport = viewport => {
    this.setState({ viewport })
  }

  renderDroppedMarker = () => {
    if (!this.state.droppedMarker) {
      return
    }

    return (
      <Marker longitude={this.props.longitude} latitude={this.props.latitude}>
        <CityPin size={20} />
      </Marker>
    )
  }

  render() {
    const { viewport } = this.state

    return (
      <div className="fixed-map">
        <MapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/dylan11/cjqo4xw5r1bxq2rt7g8jmulzo"
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={TOKEN}
          onClick={this._userClick}
        >
          {this.renderDroppedMarker()}
        </MapGL>
      </div>
    )
  }
}

export default FixedMap
