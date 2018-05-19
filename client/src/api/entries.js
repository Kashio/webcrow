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

const create = entry => {
  return axios.post(config.api + resource, {
    entry
  });
};

const rename = (entry, name) => {
  const params = new URLSearchParams();
  params.append('name', name);
  params.entry = entry;
  return axios.put(config.api + resource, {
    entry,
    name
  });
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
