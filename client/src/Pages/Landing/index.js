import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './style.css'

import downArrow from '../../images/Caret_down_font_awesome.svg.png'
import upArrow from '../../images/Caret_up_font_awesome.svg.png'

class Landing extends Component {
  _toWhyHitch = event => {
    document
      .querySelector('.why-hitch')
      .scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  _toWhyDrive = event => {
    document
      .querySelector('.why-drive')
      .scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  _toHowItWorks = event => {
    document
      .querySelector('.how-it-works')
      .scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  _toTop = event => {
    document
      .querySelector('.van')
      .scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  render() {
    return (
      <main className="landing">
        <div className="wrapper">
          <section className="van">
            <header>
              <div className="header-wrapper">
                <div className="header-left">HITCH</div>
                <div className="header-right">
                  <Link to="/profile/1" className="log-in">
                    LOG IN
                  </Link>
                  <Link to="/profile/1" className="sign-up">
                    SIGN UP
                  </Link>
                </div>
              </div>
              <div className="sub-header">
                <span>H I T C H I K I N G</span> <span>f o r</span>{' '}
                <span>t h e </span> <span>2 1 s t</span>{' '}
                <span>C E N T U R Y</span>
              </div>
            </header>
            <img
              src={downArrow}
              alt="down arrow"
              className="arrow bounce"
              onClick={this._toWhyHitch}
            />
          </section>
          <section className="why-hitch">
            <div className="container">
              <h2>HITCH A RIDE</h2>
              <div className="more-info">
                <h5>Too far for an Uber</h5>
                <p>
                  Have you ever tried to take an Uber from one city to another?
                  It's way too expensive! Why rack up hundreds of dollars in
                  fares when you can just hitch a ride with someone else? Hitch
                  offers you the opportunity to hop on board with a fellow
                  traveler and arrive at your destination for a fraction of the
                  price that traditional ride-shares would charge.
                </p>
                <h5>Forget the bus</h5>
                <p>
                  It's no secret that public transportation is lacking in the
                  United States of America. It's even more of a problem on
                  long-distance rides. Buses tend to be slow, smelly, and full
                  of crazy characters. Don't subject yourself to that kind of
                  trip when there are literally hundreds of fellow travelers
                  headed in the same direction you are! Instead of relying on
                  hopelessly inadequate public transportation, take advantage of
                  peer-to-peer technology.
                </p>
                <h5>Save money</h5>
                <p>
                  Since drivers on Hitch are headed to their locations anyway,
                  they can afford to charge a small amount per trip. Think of it
                  as covering a friend's gas money. Renting a car is expensive.
                  Instead, rely on a peer to get you there for a fraction of
                  that price.
                </p>
              </div>
            </div>
            <img
              src={downArrow}
              alt="down arrow"
              className="arrow bounce"
              onClick={this._toWhyDrive}
            />
          </section>
          <section className="why-drive">
            <div className="container">
              <h2>OFFER A DRIVE</h2>
              <div className="more-info">
                <h5>Headed there anyway</h5>
                <p>
                  Drivers on Hitch only drive at their own convenience. If
                  you're headed home for winter break, why not give someone a
                  ride on the way? Are you visiting your family for
                  Thanksgiving? Give a fellow traveler a lift! The magic of
                  Hitch is that you're both headed to the same destination, so
                  you might as well carpool.
                </p>
                <h5>Make easy money</h5>
                <p>
                  Think about it: you could have an empty seat next to you on
                  your drive, or that seat could be filled and your bank account
                  could be filled, too! Turn a boring trip between cities into a
                  money-making opportunity! If you are headed in that direction
                  either way, you might as well offer a ride and make some easy
                  money.
                </p>
                <h5>Meet new people</h5>
                <p>
                  In today's world, technology is connecting an unprecedented
                  amount of people. Rideshares are no different. Hitchiking is
                  an opportunity to meet new people and engage in quality
                  conversation. Offering your vehicle for a drive is opening
                  yourself and the rider up to a social experience that just
                  can't be had in an Uber or bus.
                </p>
              </div>
            </div>
            <img
              src={downArrow}
              alt="down arrow"
              className="arrow bounce"
              onClick={this._toHowItWorks}
            />
          </section>
          <section className="how-it-works">
            <div className="container">
              <h2>HOW DOES IT WORK</h2>
              <div className="more-info">
                <h5>Make a profile</h5>
                <p>
                  Drivers on Hitch only drive at their own convenience. If
                  you're headed home for winter break, why not give someone a
                  ride on the way? Are you visiting your family for
                  Thanksgiving? Give a fellow traveler a lift! The magic of
                  Hitch is that you're both headed to the same destination, so
                  you might as well carpool.
                </p>
                <h5>Find a ride</h5>
                <p>
                  Think about it: you could have an empty seat next to you on
                  your drive, or that seat could be filled and your bank account
                  could be filled, too! Turn a boring trip between cities into a
                  money-making opportunity! If you are headed in that direction
                  either way, you might as well offer a ride and make some easy
                  money.
                </p>
                <h5>Offer a drive</h5>
                <p>
                  In today's world, technology is connecting an unprecedented
                  amount of people. Rideshares are no different. Hitchiking is
                  an opportunity to meet new people and engage in quality
                  conversation. Offering your vehicle for a drive is opening
                  yourself and the rider up to a social experience that just
                  can't be had in an Uber or bus.
                </p>
              </div>
            </div>
            <img
              src={upArrow}
              alt="up arrow"
              className="arrow bounce"
              onClick={this._toTop}
            />
          </section>
        </div>
      </main>
    )
  }
}

export default Landing
