const path = require('path');
const fse = require('fs-extra');
const fspvr = require('fspvr');
const utils = require('../utils');
const EOL = require('os').EOL;

const DIRECTORY = 'DIRECTORY';
const FIXTURE = 'FIXTURE';
const FIXTURE_FILE_SUFFIX = '.test.js';
const OUTSIDE_WEBCROW_HOME_FOLDER_MESSAGE = `entry needs to be inside ${process.env.WEBCROW_HOME}`;

const get = entryPath => {
  return new Promise((resolve, reject) => {
    const completeEntryPath = path.join(process.env.WEBCROW_HOME, entryPath);
    if (utils.isEntryInsideWebCrowHome(completeEntryPath)) {
      fse.readdir(completeEntryPath)
        .then(entries => {
          Promise.all(
            entries
              .map(entry => fse.stat(path.join(completeEntryPath, entry)))
              .map(promise => promise.catch(err => console.error(err))))
            .then(stats => {
              const validEntries = [];
              stats.forEach((stat, index) => {
                if (stat.isDirectory() || entries[index].endsWith(FIXTURE_FILE_SUFFIX)) {
                  validEntries.push(entries[index]);
                }
              });
              resolve(validEntries);
            })
            .catch(reject);
        })
        .catch(reject);
    } else {
      reject(new Error(OUTSIDE_WEBCROW_HOME_FOLDER_MESSAGE));
    }
  });
};

const create = entry => {
  return new Promise((resolve, reject) => {
    const completeEntryPath = path.join(process.env.WEBCROW_HOME, entry.path);
    if (utils.isEntryInsideWebCrowHome(completeEntryPath)) {
      if (fspvr.isPathValid(completeEntryPath, true)) {
        fse.pathExists(completeEntryPath)
          .then(exists => {
            if (exists) {
              reject(new Error(`entry ${entry.path} already exists`));
            } else if (entry.type === FIXTURE && completeEntryPath.endsWith(FIXTURE_FILE_SUFFIX)) {
              fse.ensureFile(completeEntryPath)
                .then(() => {
                  let fixtureDecoration = `"@url ${entry.url}";${EOL}`;
                  if (entry.username) {
                    fixtureDecoration += `"@username ${entry.username}";${EOL}`;
                  }
                  if (entry.username) {
                    fixtureDecoration += `"@password ${entry.password}";${EOL}`;
                  }
                  return fse.appendFile(completeEntryPath, fixtureDecoration);
                })
                .then(resolve)
                .catch(() => {
                  reject(new Error(`error creating test ${entry.path}`));
                });
            } else {
              fse.ensureDir(completeEntryPath)
                .then(resolve)
                .catch(() => {
                  reject(new Error(`error creating directory ${entry.path}`));
                });
            }
          });
      } else {
        reject(new Error(`${entry.path} is not a valid entry path`));
      }
    } else {
      reject(new Error(OUTSIDE_WEBCROW_HOME_FOLDER_MESSAGE));
    }
  });
};

const rename = (entry, name) => {
  return new Promise((resolve, reject) => {
    const completeEntryPath = path.join(process.env.WEBCROW_HOME, entry.path);
    if (utils.isEntryInsideWebCrowHome(completeEntryPath)) {
      if (fspvr.isSegmentValid(name, true)) {
        let newEntryPath = completeEntryPath.replace(new RegExp('[^\\' + path.sep + ']+$'), name);
        if (entry.type === FIXTURE) {
          newEntryPath += FIXTURE_FILE_SUFFIX;
        }
        fse.rename(completeEntryPath, newEntryPath)
          .then(resolve)
          .catch(() => {
            reject(new Error(`error renaming entry ${completeEntryPath}`));
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
      const completeEntryPath = path.join(process.env.WEBCROW_HOME, entryPath);
      if (utils.isEntryInsideWebCrowHome(completeEntryPath)) {
        fse.remove(completeEntryPath)
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
