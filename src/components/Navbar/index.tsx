import React, { Component, Fragment } from 'react'
import './Nav.scss'

export class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div className="navbar">
          <div className="container">
            <div className="navbar-logo pt-2">&lt; /&gt;</div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Navbar;
