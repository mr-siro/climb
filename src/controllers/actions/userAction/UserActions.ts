import {UserActionTypes} from '../../types';

const getUserInfo = (resolve: Function, reject: Function) => ({
  type: UserActionTypes.GET_USER_PROFILE_REQUEST,
  resolve,
  reject,
});

const incrementCount = (count: number) => ({
  type: UserActionTypes.USER_COUNT_INCREMENT,
  count:count,
});

const decrementCount = (count: number) => ({
  type: UserActionTypes.USER_COUNT_DECREMENT,
  count:count,
});
export default {
  getUserInfo,
  incrementCount,
  decrementCount,
};
