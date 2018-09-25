import React, { Component } from 'react';
import * as $ from 'jquery';

class ClickToCopyLink extends Component {

  render() {
    return (
      <div className="click-to-copy--container">
        <div className="click-to-copy--explanation">
          <p>Click email to copy to clipboard</p>
        </div>
        <textarea readOnly={true} type="text" id={this.props.linkID} className="click-to-copy--link copy--link" data-clipboard-target={`#${this.props.linkID}`} value={this.props.linkInner}/>
      </div>
    );
  }
}

export default ClickToCopyLink;
