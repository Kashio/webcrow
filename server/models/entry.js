'use strict';

import fs from 'fs';
import path from 'path';
import util from 'util';
import fsp from 'fs-promise';
import fspvr from 'fspvr';
import utils from '../utils';

const OUTSIDE_WEBCROW_HOME_FOLDER_MESSAGE = util.format('entry needs to be inside %s', process.env.WEBCROW_HOME);

export default {
  create: (entry, done) => {
    const directory = path.join(process.env.WEBCROW_HOME, entry.path);
    if (!utils.isEntryInsideWebCrowHome(directory)) {
      done({
        message: OUTSIDE_WEBCROW_HOME_FOLDER_MESSAGE
      });
    } else {
      if (!fspvr.isPathValid(entry.path, true)) {
        done({
          message: util.format('%s is not a valid entry path', entry.path)
        });
      } else {
        fsp.access(directory)
          .then(() => {
            done({
              message: util.format('entry %s already exists', entry.path)
            });
          })
          .catch(() => {
            fsp.ensureDir(directory)
              .then(() => {
                done();
              });
          });
      }
    }
  },
  rename: (entryPath, name, done) => {
    const directory = path.join(process.env.WEBCROW_HOME, entryPath);
    if (!utils.isEntryInsideWebCrowHome(directory)) {
      done({
        message: OUTSIDE_WEBCROW_HOME_FOLDER_MESSAGE
      });
    } else {
      if (!fspvr.isSegmentValid(name, true)) {
        done({
          message: util.format('%s is not a valid entry name', name)
        });
      } else {
        const newEntryPath = directory.replace(new RegExp('[^\\' + path.sep + ']+$'), name);
        fs.rename(directory, newEntryPath, done);
      }
    }
  },
  delete: (entryPath, done) => {
    const directory = path.join(process.env.WEBCROW_HOME, entryPath);
    if (!utils.isEntryInsideWebCrowHome(directory)) {
      done({
        message: OUTSIDE_WEBCROW_HOME_FOLDER_MESSAGE
      });
    } else {
      fsp.remove(directory)
        .then(done)
        .catch(done);
    }
  }
};
