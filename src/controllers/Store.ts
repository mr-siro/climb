import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import Reducers from './reducers';
import RootSaga from './sagas/RootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(Reducers, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(RootSaga);

// render the application

export default {
  store,
};