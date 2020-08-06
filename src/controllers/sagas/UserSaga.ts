import {put, takeLatest} from 'redux-saga/effects';
import {UserActionTypes} from '../types';
import AsyncStorage from '@react-native-community/async-storage';
import {CONSTANT} from '@config';

function* doGetUserInfo(action: any) {
  const {resolve, reject} = action;
  try {
    const profile = yield AsyncStorage.getItem(CONSTANT.USER_STORAGE_KEY);
    if (profile) {
      yield put({type: UserActionTypes.GET_USER_PROFILE_SUCCESS, profile});
      resolve(profile);
    } else {
      yield put({type: UserActionTypes.GET_USER_PROFILE_ERROR, profile});
      reject();
    }
  } catch (error) {
    yield put({type: UserActionTypes.GET_USER_PROFILE_ERROR, error});
    reject();
  }
}

export function* getUserInfo() {
  yield takeLatest(UserActionTypes.GET_USER_PROFILE_REQUEST, doGetUserInfo);
}

export default [getUserInfo()];
