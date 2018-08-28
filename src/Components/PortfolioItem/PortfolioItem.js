import React, { Component } from 'react';
import RightHandArrow from './Right_Pointed_Arrow.png';

class PortfolioItem extends Component {
  render() {
    return (
      <div className="portfolio-item--container">
        <div className="portfolio-item--inner">
          <img src={this.props.logo} alt="Story Portfolio Logo" className="portfolio-item--logo"/>
          <div className="portfolio-item--text-overlay">
            <h4>{this.props.companyName}</h4>
            <p>{this.props.companyBio}</p>
            <div className="portfolio-item--link-container">
              <a target="_blank" href={this.props.link}>Launch Site</a>
              <a target="_blank" href={this.props.link}>
                <img src={RightHandArrow} alt="Right pointed arrow" className="portfolio-item--right-arrow"/>
              </a>
            </div>
          </div>
        </div>
        { this.props.messageBanner &&
          <div className="message-banner--container">
            <div className="message-banner--inner">
              <h6 className="message-banner--text">{this.props.messageBannerText}</h6>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default PortfolioItem