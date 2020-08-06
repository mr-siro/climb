import {put, takeLatest,takeEvery} from 'redux-saga/effects';
import {UserActionTypes} from '../types';

function* increment() {
    console.log(`count++`);
}

export function* watchIncrement() {
    yield takeEvery(UserActionTypes.USER_COUNT_INCREMENT, increment);
}

function* decrement() {
    console.log(`count--`);
}

export function* watchDecrement() {
    yield takeEvery(UserActionTypes.USER_COUNT_DECREMENT, decrement);
}