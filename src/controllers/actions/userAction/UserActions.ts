import {UserActionTypes} from '../../types';

const getUserInfo = (resolve: Function, reject: Function) => ({
  type: UserActionTypes.GET_USER_PROFILE_REQUEST,
  resolve,
  reject,
});

export default {
  getUserInfo,
};