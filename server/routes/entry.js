const dataProvider = require('../models/entry.js');

const post = (req, res) => {
  dataProvider.create(req.body)
    .then(() => {
      res.status(201).send(`entry ${req.body.path} was created successfully`);
    })
    .catch(error => {
      res.status(409).send(error.message);
    });
};

const put = (req, res) => {
  dataProvider.rename(req.body.entryPath, req.body.name)
    .then(() => {
      res.status(200).send(`entry ${req.body.entryPath} was renamed to ${req.body.name} successfully`);
    })
    .catch(error => {
      res.status(404).send(error.message);
    });
};

const remove = (req, res) => {
  dataProvider.delete(req.query.entryPath)
    .then(() => {
      res.status(200).send(`entry ${req.query.entryPath} was deleted successfully`);
    })
    .catch(error => {
      res.status(404).send(error.message);
    });
};

module.exports = {
  post,
  put,
  remove
};
