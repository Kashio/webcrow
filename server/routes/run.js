'use strict';
var dataProvider = require('../models/run.js');
/**
 * Operations on /run
 */
module.exports = {
    /**
     * summary: Run tests
     * description: 
     * parameters: tests
     * produces: 
     * responses: 204, 403, default
     */
    post: function (req, res, next) {
        /**
         * Get the data for response 204
         * For response `default` status 200 is used.
         */
        var status = 204;
        var provider = dataProvider['post']['204'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
