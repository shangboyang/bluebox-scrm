import React from 'react'; // from CDN
import ReactDOM from 'react-dom'; // from CDN
import route from '@/config/route';
import configureStore from '@/config/store';

import '@/css/resets.less';

const Provider = process.env.NODE_ENV !== 'production' ? require('react-redux').Provider : window.ReactRedux && window.ReactRedux.Provider;

// VConsole
// if (window.VConsole && process.env.NODE_ENV !== 'production') {
//   new window.VConsole();
// }

require('@/utils/polyfill').execute();

const store = configureStore();
// 添加Global订阅事件
// store.subscribe(() => {});
ReactDOM.render(
  <Provider store={store}>{route}</Provider>,
  document.getElementById('app')
);
