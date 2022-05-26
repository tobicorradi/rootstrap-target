import api from '../api';
import { UserEndPoints } from '../constants';

class userService {
  static signIn(data) {
    return api.post(UserEndPoints.SIGN_UP, data);
  }

  static logIn(data) {
    return api.post(UserEndPoints.LOG_IN, data);
  }
}

export default userService;
