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

export default combineReducers({
  profile,
});
