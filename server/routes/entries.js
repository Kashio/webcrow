const dataProvider = require('../models/entries.js');

const get = (req, res) => {
  dataProvider.get(req.query.entryPath)
    .then(entries => {
      res.status(200).send(entries);
    })
    .catch(error => {
      res.status(500).send(error.message);
    });
};

module.exports = {
  get
};
