import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { AppContainer } from 'src/components/App';
import appReducer from 'src/reducers/app-reducer.js';

const reducers = combineReducers({
  routing: routerReducer,
  app: appReducer
});
const middlewares = applyMiddleware(thunk, routerMiddleware(browserHistory));
const store = createStore(reducers, middlewares);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer}></Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);