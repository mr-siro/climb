import {UserActionTypes} from '../../types';

const getUserInfo = (resolve: Function, reject: Function) => ({
  type: UserActionTypes.GET_USER_PROFILE_REQUEST,
  resolve,
  reject,
});

const incrementCount = () => ({
  type: UserActionTypes.USER_COUNT_INCREMENT,
});

const decrementCount = () => ({
  type: UserActionTypes.USER_COUNT_DECREMENT,
});

export default {
  getUserInfo,
  incrementCount,
  decrementCount
};
