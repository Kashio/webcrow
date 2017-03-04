'use strict';
var dataProvider = require('./fixture.js');
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
     * parameters: entryPath, name, page, username, password
     * produces: 
     * responses: 200, 403, default
     */
    put: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
