import React, { Component } from 'react';
import * as $ from 'jquery';

class ClickToCopyLink extends Component {

  handleLinkClick = (linkID: string, event: any) => {
    $(`#${linkID}`).select();
    document.execCommand("copy");
  }

  render() {
    return (
      <div className="click-to-copy--container">
        <div className="click-to-copy--explanation">
          <p>Click email to copy to clipboard</p>
        </div>
        <textarea readOnly={true} type="text" id={this.props.linkID} className="click-to-copy--link" value={this.props.linkInner} onClick={() => this.handleLinkClick(this.props.linkID)}/>
      </div>
    );
  }
}

export default ClickToCopyLink;
