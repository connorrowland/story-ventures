import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <div className="flex--grid" id="footer--inner">
          <a href="mailto:helloworld@storyventures.vc" id="footer--email">helloworld@storyventures.vc</a>
          <h6 id="footer--copyright">Copyright © 2017 story ventures All Rights Reserved</h6>
        </div>
      </section>
    );
  }
}

export default Footer