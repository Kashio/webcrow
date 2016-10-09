'use strict';
var Mockgen = require('../mockgen.js');
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
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/report/export',
                operation: 'get',
                response: '200'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/report/export',
                operation: 'get',
                response: '403'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/report/export',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
