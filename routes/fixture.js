'use strict';
var dataProvider = require('../models/fixture.js');
/**
 * Operations on /fixture
 */
module.exports = {
    /**
     * summary: Create fixture
     * description: 
     * parameters: fixture
     * produces: 
     * responses: 201, 403, default
     */
    post: function (req, res, next) {
        /**
         * Get the data for response 201
         * For response `default` status 200 is used.
         */
        var status = 201;
        var provider = dataProvider['post']['201'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Update fixture details
     * description: 
     * parameters: projectId, directoryId, fixtureId, name, page, username, password
     * produces: 
     * responses: 204, 403, default
     */
    put: function (req, res, next) {
        /**
         * Get the data for response 204
         * For response `default` status 200 is used.
         */
        var status = 204;
        var provider = dataProvider['put']['204'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Delete fixture
     * description: 
     * parameters: projectId, directoryId, fixtureId
     * produces: 
     * responses: 204, 403, default
     */
    delete: function (req, res, next) {
        /**
         * Get the data for response 204
         * For response `default` status 200 is used.
         */
        var status = 204;
        var provider = dataProvider['delete']['204'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
