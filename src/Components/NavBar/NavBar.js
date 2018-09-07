import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import ScrollToAnchorLink from '../ScrollToAnchorLink';
import XIcon from './x_icon.png';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileFlyoutOpen: false
    }
  }

  toggleMobileNavigation = (e) => {
    e.preventDefault();

    this.setState({
      mobileFlyoutOpen: !this.state.mobileFlyoutOpen
    })
  }

  render() {
    return (
      <div className="nav--outer">
        <div className={`mobile-flyout--container ${this.state.mobileFlyoutOpen ? "mobile-flyout--open" : "mobile-flyout--closed"}`}>
          <div className="mobile-flyout--inner">
            <div className="mobile-flyout--menu">
              <Link to="/" className="nav--link">
                <img src={this.props.logo} className="nav-logo--img" alt="Story Logo" />
              </Link>
              <a href="#" className="nav--x-container" onClick={this.toggleMobileNavigation}>
                <img src={XIcon} className="mobile-nav-x--img" alt="Story Logo" />
              </a>
            </div>
            <Link to="/Service_Providers" className="nav--link">Service Providers</Link>
            <Link
              to="/#landing--portfolio-grid"
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >PORTFOLIO</Link>
          </div>
        </div>

        <nav className="nav-links--container">
          <div className="nav--inner">
            <Link to="/" className="nav--logo">
              <img src={this.props.logo} className="nav-logo--img" alt="Story Logo" />
            </Link>
            <div className="nav-inner--right">
              <div className="nav-inner-right--links">
                <Link to="/Service_Providers" className="nav--link">Service Providers</Link>
                <Link
                  to="/#landing--portfolio-grid"
                  scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >PORTFOLIO</Link>
              </div>
              <a href="/" className="nav--link" id="mobile-flyout--trigger" onClick={this.toggleMobileNavigation}>MENU</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar