const path = require('path');
const Promise = require('promise');
const fse = require('fs-extra');
const fspvr = require('fspvr');
const utils = require('../utils');

const OUTSIDE_WEBCROW_HOME_FOLDER_MESSAGE = `entry needs to be inside ${process.env.WEBCROW_HOME}`;

const create = entry => {
  return new Promise((resolve, reject) => {
    const directory = path.join(process.env.WEBCROW_HOME, entry.path);
    if (utils.isEntryInsideWebCrowHome(directory)) {
      if (fspvr.isPathValid(entry.path, true)) {
        fse.pathExists(directory)
          .then(() => {
            reject(new Error(`entry ${entry.path} already exists`));
          })
          .catch(() => {
            fse.ensureDir(directory)
              .then(resolve)
              .catch(() => {
                reject(new Error(`error creating entry ${entry.path}`));
              });
          });
      } else {
        reject(new Error(`${entry.path} is not a valid entry path`));
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

const remove = entryPath => {
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
};

module.exports = {
  create,
  rename,
  remove
};
