const path = require('path');
const Promise = require('promise');
const fse = require('fs-extra');
const utils = require('../utils');

const TEST_FILE_SUFFIX = '.test.js';

const get = entryPath => {
  return new Promise((resolve, reject) => {
    const directory = path.join(process.env.WEBCROW_HOME, entryPath);
    if (utils.isEntryInsideWebCrowHome(directory)) {
      fse.readdir(directory)
        .then(entries => {
          Promise.all(
            entries
              .map(entry => fse.stat(path.join(directory, entry)))
              .map(promise => promise.catch(err => console.error(err))))
            .then(stats => {
              const validEntries = [];
              stats.forEach((stat, index) => {
                if (stat.isDirectory() || entries[index].endsWith(TEST_FILE_SUFFIX)) {
                  validEntries.push(entries[index]);
                }
              });
              resolve(validEntries);
            })
            .catch(reject);
        })
        .catch(reject);
    } else {
      reject(new Error(`entry needs to be inside ${process.env.WEBCROW_HOME}`));
    }
  });
};

module.exports = {
  get
};
