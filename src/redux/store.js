import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import { compose, createStore, applyMiddleware } from 'redux';

import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
/* eslint-disable*/
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
/* eslint-disable*/
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
