'use strict';

import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import rmdir from 'rmdir';

export default {
  create: (project, done) => {
    mkdirp(path.join(process.env.WEBCROW_HOME, project.id), done);
  },
  rename: (projectId, name, done) => {
    fs.rename(path.join(process.env.WEBCROW_HOME, projectId),
      path.join(process.env.WEBCROW_HOME, name), done);
  },
  delete: (projectId, done) => {
    rmdir(path.join(process.env.WEBCROW_HOME, projectId), done);
  }
};
