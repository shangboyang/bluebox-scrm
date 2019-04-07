import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // 23k
import Connect from '@/containers/App/connect';
import '@/containers/App/style.less';

const App = props => <div
  key={props.location.pathname}
  style={{ height: '100%', width: '100%' }}>
  {props.children}
</div>;

export default Connect(App);
