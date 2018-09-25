import React, { Component } from 'react';
import ClickTopCopyLink from './ClickToCopyLink';

class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <div className="flex--grid" id="footer--inner">
          <ClickTopCopyLink
            linkID={"footer--email"}
            linkInner={"helloworld@storyventures.vc"}
          />
          <h6 id="footer--copyright">Copyright © 2017 story ventures All Rights Reserved</h6>
        </div>
      </section>
    );
  }
}

export default Footer