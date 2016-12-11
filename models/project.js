'use strict';

import fs from 'fs';
import util from 'util';
import mkdirp from 'mkdirp';
import rmdir from 'rmdir';

export default {
  create: (project, done) => {
    mkdirp(util.format('%s%s', process.env.WEBCROW_HOME, project.id), done);
  },
  rename: (projectId, name, done) => {
    fs.rename(util.format('%s%s', process.env.WEBCROW_HOME, projectId),
      util.format('%s%s', process.env.WEBCROW_HOME, name), done);
  },
  delete: (projectId, done) => {
    rmdir(util.format('%s%s', process.env.WEBCROW_HOME, projectId), done);
  }
};
