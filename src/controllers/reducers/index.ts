import {combineReducers} from 'redux';
import _, {some, get} from 'lodash';
import UserReducer from './userReducer/UserReducer';
import UserCountReducer from './userCountReducer/UserCountReducer';

const allReducers = combineReducers({
  user: UserReducer,
  userCount: UserCountReducer,
});

export default allReducers;
