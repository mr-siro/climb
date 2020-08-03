import {combineReducers} from 'redux';
import _, {some, get} from 'lodash';
import UserReducer from './userReducer/UserReducer';


const allReducers = combineReducers({
  user: UserReducer,
});

export default allReducers;
