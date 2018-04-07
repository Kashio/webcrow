const path = require('path');
const fse = require('fs-extra');
const fspvr = require('fspvr');
const utils = require('../utils');

const TEST_FILE_SUFFIX = '.test.js';
const OUTSIDE_WEBCROW_HOME_FOLDER_MESSAGE = `entry needs to be inside ${process.env.WEBCROW_HOME}`;

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

const create = entryPath => {
  return new Promise((resolve, reject) => {
    const directory = path.join(process.env.WEBCROW_HOME, entryPath);
    if (utils.isEntryInsideWebCrowHome(directory)) {
      if (fspvr.isPathValid(entryPath, true)) {
        fse.pathExists(directory)
          .then(exists => {
            if (exists) {
              reject(new Error(`entry ${entryPath} already exists`));
            } else {
              if (entryPath.endsWith(TEST_FILE_SUFFIX)) {
                fse.ensureFile(directory)
                  .then(resolve)
                  .catch(() => {
                    reject(new Error(`error creating entry ${entryPath}`));
                  });
              } else {
                fse.ensureDir(directory)
                  .then(resolve)
                  .catch(() => {
                    reject(new Error(`error creating entry ${entryPath}`));
                  });
              }
            }
          });
      } else {
        reject(new Error(`${entryPath} is not a valid entry path`));
      }
    } else {
      reject(new Error(OUTSIDE_WEBCROW_HOME_FOLDER_MESSAGE));
    }
  });
};

const rename = (entryPath, name) => {
  return new Promise((resolve, reject) => {
    const directory = path.join(process.env.WEBCROW_HOME, entryPath);
    if (utils.isEntryInsideWebCrowHome(directory)) {
      if (fspvr.isSegmentValid(name, true)) {
        const newEntryPath = directory.replace(new RegExp('[^\\' + path.sep + ']+$'), name);
        fse.rename(directory, newEntryPath)
          .then(resolve)
          .catch(() => {
            reject(new Error(`error renaming entry ${entryPath}`));
          });
      } else {
        reject(new Error(`${name} is not a valid entry name`));
      }
    } else {
      reject(new Error(OUTSIDE_WEBCROW_HOME_FOLDER_MESSAGE));
    }
  });
};

module.exports = {
  get,
  create,
  rename,
  delete: entryPath => {
    return new Promise((resolve, reject) => {
      const directory = path.join(process.env.WEBCROW_HOME, entryPath);
      if (utils.isEntryInsideWebCrowHome(directory)) {
        fse.remove(directory)
          .then(resolve)
          .catch(() => {
            reject(new Error(`error deleting entry ${entryPath}`));
          });
      } else {
        reject(new Error(OUTSIDE_WEBCROW_HOME_FOLDER_MESSAGE));
      }
    });
  }
};
