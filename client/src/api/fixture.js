import axios from 'axios';
import config from 'config';

const resource = 'fixture';

const getCode = path => {
  return axios.get(config.api + resource, {
    params: {
      path
    }
  });
};

export default {
  getCode
};
