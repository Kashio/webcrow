const express = require('express');
const router = express.Router();

const dataProvider = require('../models/fixture.js');

router.get('/', (req, res) => {
  dataProvider.get(req.query.path)
    .then(code => {
      res.status(200).send(code);
    })
    .catch(error => {
      res.status(500).send(error.message);
    });
});

module.exports = router;
