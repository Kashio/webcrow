'use strict';

import util from 'util';
import dataProvider from '../models/entry.js';

const post = (req, res, next) => {
  dataProvider.create(req.body, (err) => {
    if (err) {
      res.status(409).send(err.message);
    } else {
      res.status(201).send(util.format('entry %s was created successfully', req.body.path));
    }
  });
};

const put = (req, res, next) => {
  dataProvider.rename(req.body.entryPath, req.body.name, (err) => {
    if (err) {
      res.status(404).send(err.message);
    }
    res.status(200).send(util.format('entry %s was renamed to %s successfully', req.body.entryPath, req.body.name));
  });
};

const remove = (req, res, next) => {
  dataProvider.delete(req.query.entryPath, (err) => {
    if (err) {
      res.status(404).send(err.message);
    }
    res.status(200).send(util.format('entry %s was deleted successfully', req.query.entryPath));
  });
};

export { post, put, remove as delete };
