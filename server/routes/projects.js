'use strict';

import dataProvider from '../models/projects.js';

const get = (req, res, next) => {
  const status = 200;
  const provider = dataProvider['get']['200'];
  provider(req, res, function (err, data) {
    if (err) {
      next(err);
      return;
    }
    res.status(status).send(data && data.responses);
  });
};

export { get };
