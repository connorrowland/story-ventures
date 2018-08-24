import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="nav--outer">
        <nav className="nav-links--container">
          <div className="nav--inner">
            <a href="/" className="nav--logo">
              <img src={this.props.logo} className="nav-logo--img" alt="Story Logo" />
            </a>
            <div className="nav-inner--right">
              <div className="nav-inner-right--links">
                <a href="/" className="nav--link">PORTFOLIO</a>
                <a href="/" className="nav--link">SERVICE PROVIDERS</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar