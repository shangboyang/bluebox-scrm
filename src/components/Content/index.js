import React, { Component } from 'react';
import '@/components/Content/style.less';

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`content ${this.props.type}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Content;
