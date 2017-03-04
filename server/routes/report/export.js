'use strict';
var dataProvider = require('.././report/export.js');
/**
 * Operations on /report/export
 */
module.exports = {
    /**
     * summary: Export report to format
     * description: 
     * parameters: id, format
     * produces: application/octet-stream
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
    }
};
