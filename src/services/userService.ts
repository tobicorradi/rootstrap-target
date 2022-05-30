import api from '../api';
import { UserEndPoints } from '../constants';
import { LogInInputsType, SignUpInputsType } from '../types/userInputsTypes';

class userService {
  static signUp(data: { user: SignUpInputsType; }) {
    return api.post(UserEndPoints.SIGN_UP, data);
  }

  static logIn(data: { user: LogInInputsType; }) {
    return api.post(UserEndPoints.LOG_IN, data);
  }
}

export default userService;
