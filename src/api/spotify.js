import axios from 'axios';

import config from '../config';

const { baseUrl, authUrl, clientId, clientSecret } = config.api;

const axiosInstance = axios.create({
  baseURL: baseUrl
});

const authorize = async () => {
  if (!clientId) {
    return Promise.reject('Client ID is missing');
  }
  if (!clientSecret) {
    return Promise.reject('Client Secret is missing');
  }
  try {
    const { data } = await axios.post(
      authUrl,
      `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
    const { access_token: accessToken } = data || {};
    axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`
    return accessToken;
  } catch {
    return Promise.reject('Authorization failed');
  }
};

export default {
  axiosInstance,
  authorize
}
