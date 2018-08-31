import React, { Component } from 'react';
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
              <img src={this.props.logo} className="nav-logo--img" alt="Story Logo" />
              <a href="#" className="nav--x-container" onClick={this.toggleMobileNavigation}>
                <img src={XIcon} className="mobile-nav-x--img" alt="Story Logo" />
              </a>
            </div>
            <ScrollToAnchorLink
              anchor="#landing--portfolio-grid"
              innerLink="PORTFOLIO"
              additionalClasses="nav--link"
            />
          </div>
        </div>

        <nav className="nav-links--container">
          <div className="nav--inner">
            <a href="/" className="nav--logo">
              <img src={this.props.logo} className="nav-logo--img" alt="Story Logo" />
            </a>
            <div className="nav-inner--right">
              <div className="nav-inner-right--links">
                <ScrollToAnchorLink
                  anchor="#landing--portfolio-grid"
                  innerLink="PORTFOLIO"
                  additionalClasses="nav--link"
                />
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