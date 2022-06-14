import api from '.';

const ACCESS_TOKEN = 'access-token';

export default (store) => {
  api.interceptors.request.use((config) => {
    const info = store.getState().user;
    const { headers } = config;
    if (info) {
      const { token, client, data: { uid } } = info;
      config.headers[ACCESS_TOKEN] = token;
      config.headers.client = client;
      config.headers.uid = uid;
    }
    return config;
  });
};
