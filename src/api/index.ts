import axios from 'axios';
import { Http } from '../constants';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: Http.APPLICATION_JSON,
    [Http.CONTENT_TYPE]: Http.APPLICATION_JSON,
  },
});

export default api;
