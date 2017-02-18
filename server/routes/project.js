'use strict';

import util from 'util';
import dataProvider from '../models/project.js';

const post = (req, res, next) => {
  dataProvider.create(req.body, (err) => {
    if (err) {
      next(err);
      return;
    }
    res.status('201').send(util.format('project %s was created successfully', req.body.id));
  });
};

const put = (req, res, next) => {
  dataProvider.rename(req.body.projectId, req.body.name, (err) => {
    if (err) {
      next(err);
      return;
    }
    res.status('204').send(util.format('project %s was renamed to %s successfully', req.body.projectId, req.body.name));
  });
};

const remove = (req, res, next) => {
  dataProvider.delete(req.body.projectId, (err) => {
    if (err) {
      next(err);
      return;
    }
    res.status('204').send(util.format('project %s was deleted successfully', req.body.projectId));
  });
};

export { post, put, remove };

// export default {
//   post: (req, res, next) => {
//     dataProvider.create(req.body, (err) => {
//       if (err) {
//         next(err);
//         return;
//       }
//       res.status('201').send(util.format('project %s was created successfully', req.body.id));
//     });
//   },
//   put: (req, res, next) => {
//     dataProvider.rename(req.body.projectId, req.body.name, (err) => {
//       if (err) {
//         next(err);
//         return;
//       }
//       res.status('204').send(util.format('project %s was renamed to %s successfully', req.body.projectId, req.body.name));
//     });
//   },
//   delete: (req, res, next) => {
//     dataProvider.delete(req.body.projectId, (err) => {
//       if (err) {
//         next(err);
//         return;
//       }
//       res.status('204').send(util.format('project %s was deleted successfully', req.body.projectId));
//     });
//   }
// };
