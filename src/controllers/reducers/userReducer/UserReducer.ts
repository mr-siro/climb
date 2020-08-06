import {combineReducers} from 'redux';
import {UserActionTypes} from '../../types';

const profile = (state = null, response: {type: any; profile: any}) => {
  switch (response.type) {
    case UserActionTypes.GET_USER_PROFILE_SUCCESS:
      return response.profile;
    case UserActionTypes.GET_USER_PROFILE_ERROR:
      return null;
    default:
      return state;
  }
};

const counter = (times = 0, action: any) => {
  switch (action.type) {
    case UserActionTypes.USER_COUNT_INCREMENT:
      return times + action.count;
    case UserActionTypes.USER_COUNT_DECREMENT:
      return times - action.count;

    default:
      return times;
  }
};

export default combineReducers({
  profile,
  counter,
});
