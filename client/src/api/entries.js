import axios from 'axios';
import config from 'config';

const resource = 'entries';

const get = path => {
  return axios.get(config.api + resource, {
    params: {
      path
    }
  });
};

const create = path => {
  return axios.post(config.api + resource, {
    path
  });
};

const rename = (path, name) => {
  const params = new URLSearchParams();
  params.append('path', path);
  params.append('name', name);
  return axios.put(config.api + resource, params);
};

const remove = path => {
  return axios.delete(config.api + resource, {
    params: {
      path
    }
  });
};

export default {
  get,
  create,
  rename,
  remove
};
