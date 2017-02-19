'use strict';
var dataProvider = require('../../models/fixture/code.js');
/**
 * Operations on /fixture/code
 */
module.exports = {
    /**
     * summary: Get fixture code
     * description: 
     * parameters: projectId, directoryId, fixtureId
     * produces: text/javascript
     * responses: 200, 403, default
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Update fixture code
     * description: 
     * parameters: projectId, directoryId, fixtureId, code
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
    }
};
