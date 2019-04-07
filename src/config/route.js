import React from 'react';
import { useScroll } from 'react-router-scroll';
import App from '@/containers/App';
import NewActivity from '@/containers/NewActivity';
import ActivityList from '@/containers/ActivityList';
// Router
const Router = process.env.NODE_ENV !== 'production'
  ? require('react-router').Router : window.ReactRouter && window.ReactRouter.Router;
// hashHistory
const hashHistory = process.env.NODE_ENV !== 'production'
  ? require('react-router').hashHistory : window.ReactRouter && window.ReactRouter.hashHistory;
// applyRouterMiddleware
const applyRouterMiddleware = process.env.NODE_ENV !== 'production'
  ? require('react-router').applyRouterMiddleware : window.ReactRouter && window.ReactRouter.applyRouterMiddleware;

const config = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: NewActivity
    },
    childRoutes: [
      { path: '/new', name: 'new', component: NewActivity },
      { path: '/list', name: 'list', component: ActivityList }
    ]
  }
];

const route = (
  <Router
    history={hashHistory}
    routes={config}
    render={applyRouterMiddleware(useScroll())}>
  </Router>
);


export default route;
