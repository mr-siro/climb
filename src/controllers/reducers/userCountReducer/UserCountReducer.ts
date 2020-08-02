import {combineReducers} from 'redux';
import {userCountTypes} from '../../types';

const userCount = (state = 0, action: {type: any}) => {
  switch (action.type) {
    case userCountTypes.USER_COUNT_INCREMENT:
      return state + 1;
    case userCountTypes.USER_COUNT_DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default combineReducers({
  userCount,
});
