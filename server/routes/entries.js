'use strict';

import dataProvider from '../models/entries.js';

const get = (req, res, next) => {
  const status = 200;
  dataProvider.get(req.query.entryPath, (err, entries) => {
    if (err) {
      res.status('500').send(err.message);
    }
    res.status(status).send(entries);
  });
};

export { get };
