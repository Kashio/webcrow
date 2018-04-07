import axios from 'axios';
import config from 'config';

const resource = 'fixtures';

const create = (path, url, username, password) => {
  return axios.post(config.api + resource, {
    params: {
      path,
      url,
      username,
      password
    }
  });
};

const update = (path, name, url, username, password) => {
  const params = new URLSearchParams();
  params.append('path', path);
  params.append('name', name);
  params.append('url', url);
  params.append('username', username);
  params.append('password', password);
  return axios.put(config.api + resource, params);
};

export default {
  create,
  update
};
