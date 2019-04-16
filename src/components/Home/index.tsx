import React, { Component, Fragment } from 'react'
import { Navbar } from '../Navbar';

import './home.scss';

export default class Home extends Component {
  render() {
    return (
     <Fragment>
        <Navbar />
        <div className="home-wrapper">
          <div className="main">
            <div className="hero-section">
              <h2 className="heading is-bold is-uppercased">2code</h2>
              <p className="paragraph">Can't figure out a project to work on, let the community give you one</p>
              <div className="hero__button-group">
                <a href="#" className="button button--filled">Get a Project</a>
                <a href="#" className="button button--outlined">Add a Project</a>
              </div>
            </div>
          </div>
        </div>
     </Fragment>
    )
  }
}
