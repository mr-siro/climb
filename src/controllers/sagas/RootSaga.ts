import {all} from 'redux-saga/effects';
import UserSaga from './UserSaga';
import {watchDecrement,watchIncrement} from './CounterSaga';
export default function* rootSaga() {
  yield all([...UserSaga, watchDecrement(),watchIncrement()]);
}
