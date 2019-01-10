import React, { Component } from 'react'
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'

import './style.css'

import CityPin from './city-pin'
// import CityInfo from './city-info'
// import CITIES from './cities.json'

const TOKEN =
  'pk.eyJ1IjoiZHlsYW4xMSIsImEiOiJjanFvNDZzbW03cG9vNDNwZHAwY2oxcXA5In0.2igPWwt2__U0_iqUvq6rMg'

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      droppedMarker: null,
      viewport: {
        latitude: 27.7676,
        longitude: -82.6403,
        zoom: 5.5,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    }
  }

  _updateViewport = viewport => {
    this.setState({ viewport })
  }

  // _renderCityMarker = (city, index) => {
  //   return (
  //     <Marker
  //       key={`marker-${index}`}
  //       longitude={city.longitude}
  //       latitude={city.latitude}
  //     >
  //       <CityPin size={20} onClick={() => this.setState({ popupInfo: city })} />
  //     </Marker>
  //   )
  // }

  // _renderPopup() {
  //   const { popupInfo } = this.state

  //   return (
  //     popupInfo && (
  //       <Popup
  //         tipSize={5}
  //         anchor="top"
  //         longitude={popupInfo.longitude}
  //         latitude={popupInfo.latitude}
  //         closeOnClick={false}
  //         onClose={() => this.setState({ popupInfo: null })}
  //       >
  //         <CityInfo info={popupInfo} />
  //       </Popup>
  //     )
  //   )
  // }

  _userClick = event => {
    console.log('User clicked at ', event.lngLat)
    this.setState({
      droppedMarker: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      }
    })
  }

  renderDroppedMarker = () => {
    if (!this.state.droppedMarker) {
      return
    }

    return (
      <Marker
        longitude={this.state.droppedMarker.longitude}
        latitude={this.state.droppedMarker.latitude}
      >
        <CityPin size={20} />
      </Marker>
    )
  }

  render() {
    const { viewport } = this.state

    return (
      <div className="map">
        <MapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/dylan11/cjqo4xw5r1bxq2rt7g8jmulzo"
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={TOKEN}
          onClick={this._userClick}
        >
          {/* {CITIES.map(this._renderCityMarker)} */}

          {this.renderDroppedMarker()}
          {/* {this._renderPopup()} */}

          <div className="nav" style={navStyle}>
            <NavigationControl onViewportChange={this._updateViewport} />
          </div>
        </MapGL>
      </div>
    )
  }
}

export default Map
