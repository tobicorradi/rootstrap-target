import api from '.';
import { Http } from '../constants';

export default (store) => {
  api.interceptors.request.use((config) => {
    const info = store.getState().user;
    const { headers } = config;
    if (info && headers) {
      const { token, client, data: { uid } } = info;
      headers[Http.ACCESS_TOKEN] = token;
      headers.client = client;
      headers.uid = uid;
    }
    return config;
  });
};
