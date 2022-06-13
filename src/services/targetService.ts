import api from '../api';
import { TargetEndpoints } from '../constants';
import { TargetTypes } from '../types/TargetTypes';

class targetService {
  static create(target: { target: TargetTypes }) {
    return api.post(TargetEndpoints.CREATE, target);
  }
}

export default targetService;
