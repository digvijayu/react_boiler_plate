import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    let input;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <Link to="/" className="navbar-brand">
          Boiler Plate
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/somepage" className="nav-link">
                Some Page
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect()(Navigation);
