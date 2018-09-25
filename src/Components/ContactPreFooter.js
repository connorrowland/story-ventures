import React, { Component } from 'react';
import ClickTopCopyLink from './ClickToCopyLink';

class ContactPreFooter extends Component {
  render() {
    return (
      <section id="contact-pre-footer">
        <div id="contact-pre-footer--inner">
          <h6 id="pre-footer--eyebrow" className="eyebrow">Let’s write the future together.</h6>
          <ClickTopCopyLink
            linkID={"pre-footer--email"}
            linkInner={"helloworld@storyventures.vc"}
          />
        </div>
      </section>
    );
  }
}

export default ContactPreFooter