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

const counter = (state = 0, action: any) => {
  switch (action.type) {
    case UserActionTypes.USER_COUNT_INCREMENT:  
      return state + 1;
    case UserActionTypes.USER_COUNT_DECREMENT:
      if(state == 0){
        return state = 0
      }
      return state - 1;
    default:
      return state;
  }
};

export default combineReducers({
  profile,
  counter
});
