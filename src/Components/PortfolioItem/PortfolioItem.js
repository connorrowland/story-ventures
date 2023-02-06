import React, { Component } from "react";
import RightHandArrow from "./Right_Pointed_Arrow.png";

class PortfolioItem extends Component {
  render() {
    return (
      <a
        className="portfolio-item--container"
        target="_blank"
        href={this.props.hideLink ? undefined : this.props.link}
        id={this.props.id ? this.props.id : undefined}
      >
        <div className="portfolio-item--inner">
          {this.props.logo ? (
            <img
              src={this.props.logo}
              alt="Story Portfolio Logo"
              className="portfolio-item--logo"
              id={`logo--${this.props.companyName}`}
            />
          ) : (
            <h3 className="portfolio-item--logo-text">{this.props.logoText}</h3>
          )}
          <div className="portfolio-item--text-overlay">
            <h4>{this.props.companyName}</h4>
            <p>{this.props.companyBio}</p>
            {this.props.secondLink && (
              <a
                target="_blank"
                className="portfolio-item--small-link"
                href={this.props.secondLink}
              >
                {this.props.secondLinkText}
              </a>
            )}
            <div className="portfolio-item--link-container">
              {!this.props.hideLink && (
                <img
                  src={RightHandArrow}
                  alt="Right pointed arrow"
                  className="portfolio-item--right-arrow"
                />
              )}
            </div>
          </div>
        </div>
        {this.props.messageBanner && (
          <div className="message-banner--container">
            <div className="message-banner--inner">
              <h6 className="message-banner--text">
                {this.props.messageBannerText}
              </h6>
            </div>
          </div>
        )}
      </a>
    );
  }
}

export default PortfolioItem;
