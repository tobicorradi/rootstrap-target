import api from '../api';
import { UserEndPoints } from '../constants/userEndpoints';

class userService {
  static signIn(data) {
    return api.post(UserEndPoints.SIGN_UP, data);
  }
}

export default userService;
