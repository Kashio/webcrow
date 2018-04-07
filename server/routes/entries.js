const express = require('express');
const router = express.Router();

const dataProvider = require('../models/entries.js');

router.get('/', (req, res) => {
  dataProvider.get(req.query.path)
    .then(entries => {
      res.status(200).send(entries);
    })
    .catch(error => {
      res.status(500).send(error.message);
    });
});

router.post('/', (req, res) => {
  dataProvider.create(req.body.path)
    .then(() => {
      res.status(201).send(req.body.path);
    })
    .catch(error => {
      res.status(409).send(error.message);
    });
});

router.put('/', (req, res) => {
  dataProvider.rename(req.body.path, req.body.name)
    .then(() => {
      res.status(200).send(req.body.name);
    })
    .catch(error => {
      res.status(404).send(error.message);
    });
});

router.delete('/', (req, res) => {
  dataProvider.delete(req.query.path)
    .then(() => {
      res.status(200).send(req.query.path);
    })
    .catch(error => {
      res.status(404).send(error.message);
    });
});

module.exports = router;
