const path = require('path');
const fse = require('fs-extra');
const fspvr = require('fspvr');
const utils = require('../utils');

const OUTSIDE_WEBCROW_HOME_FOLDER_MESSAGE = `entry needs to be inside ${process.env.WEBCROW_HOME}`;

const get = fixturePath => {
  return new Promise((resolve, reject) => {
    const completeFixturePath = path.join(process.env.WEBCROW_HOME, fixturePath);
    if (utils.isEntryInsideWebCrowHome(completeFixturePath)) {
      if (fspvr.isPathValid(completeFixturePath, true)) {
        fse.pathExists(completeFixturePath)
          .then(exists => {
            if (exists) {
              fse.readFile(completeFixturePath)
                .then(resolve)
                .catch(() => {
                  reject(new Error(`error reading fixture ${completeFixturePath} code`));
                });
            } else {
              reject(new Error(`entry ${completeFixturePath} doesn't exists`));
            }
          });
      } else {
        reject(new Error(`${completeFixturePath} is not a valid entry path`));
      }
    } else {
      reject(new Error(OUTSIDE_WEBCROW_HOME_FOLDER_MESSAGE));
    }
  });
};

module.exports = {
  get
};
