import React, { Component } from 'react';
import ClickTopCopyLink from './ClickToCopyLink';

class Footer extends Component {
  getYear() {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  }
  render() {
    return (
      <section id="footer">
        <div className="flex--grid" id="footer--inner">
          <h6 id="footer--copyright">{`Copyright © ${this.getYear()} Story Ventures All Rights Reserved`}</h6>
        </div>
      </section>
    );
  }
}

export default Footer