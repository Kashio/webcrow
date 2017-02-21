'use strict';

import fs from 'fs';
import path from 'path';
import util from 'util';
import fsp from 'fs-promise';
import fspvr from 'fspvr';

export default {
  create: (project, done) => {
    const directory = path.join(process.env.WEBCROW_HOME, project.id);
    if (!fspvr.isSegmentValid(project.id, true)) {
      done({
        message: util.format('%s is not a valid directory name', project.id)
      });
    } else {
      fsp.access(directory)
        .then(() => {
          done({
            message: util.format('project %s already exists', project.id)
          });
        })
        .catch(() => {
          fsp.ensureDir(directory)
            .then(() => {
              done();
            });
        });
    }
  },
  rename: (projectId, name, done) => {
    fs.rename(path.join(process.env.WEBCROW_HOME, projectId),
      path.join(process.env.WEBCROW_HOME, name), done);
  },
  delete: (projectId, done) => {
    rmdir(path.join(process.env.WEBCROW_HOME, projectId), done);
  }
};
