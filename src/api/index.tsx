import axios from 'axios';
import { envVariables } from '../constants/envVariables';

const APPLICATION_JSON = 'application/json';
const CONTENT_TYPE = 'Content-Type';

const api = axios.create({
  baseURL: envVariables.BASE_URL,
  headers: {
    Accept: APPLICATION_JSON,
    [CONTENT_TYPE]: APPLICATION_JSON,
  },
});

export default api;
