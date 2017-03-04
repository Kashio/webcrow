'use strict';

import path from 'path';
import util from 'util';
import fsp from 'fs-promise';
import utils from '../utils';

const TEST_FILE_SUFFIX = '.test.js';

export default {
  get: (entryPath, done) => {
    const directory = path.join(process.env.WEBCROW_HOME, entryPath);
    if (!utils.isEntryInsideWebCrowHome(directory)) {
      done({
        message: util.format('entry needs to be inside %s', process.env.WEBCROW_HOME)
      });
    } else {
      fsp.readdir(directory)
        .then(entries => {
          Promise.all(
            entries
              .map(entry => {
                return fsp.stat(path.join(directory, entry));
              })
              .map(promise => promise.catch(err => console.error(err))))
            .then(stats => {
              const validEntries = [];
              stats.forEach((stat, index) => {
                if (stat.isDirectory() || entries[index].endsWith(TEST_FILE_SUFFIX)) {
                  validEntries.push(entries[index]);
                }
              });
              done(null, validEntries);
            })
            .catch(done);
        })
        .catch(done);
    }
  }
};
