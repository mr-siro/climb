import {userCountTypes} from '../../types';

const getUserCount = () => ({
  type: userCountTypes.USER_COUNT,
});

export default {getUserCount};
