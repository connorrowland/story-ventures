import React, { Component } from 'react';
import * as $ from 'jquery';

class ScrollToAnchorLink extends Component {
  handleAnchorClick = (e) => {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: $(this.props.anchor).offset().top
    }, 800);
  }

  render() {
    return (
      <a onClick={this.handleAnchorClick} href="" className={`${this.props.additionalClasses} link--animated`}>
        {this.props.innerLink}
      </a>
    );
  }
}

export default ScrollToAnchorLink;
