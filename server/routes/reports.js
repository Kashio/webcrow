'use strict';
var dataProvider = require('./reports.js');
/**
 * Operations on /reports
 */
module.exports = {
    /**
     * summary: Get reports
     * description: 
     * parameters: 
     * produces: 
     * responses: 200, default
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
    }
};
