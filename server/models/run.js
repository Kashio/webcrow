'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: 
     */
    post: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/run',
                operation: 'post',
                response: '204'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/run',
                operation: 'post',
                response: '403'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/run',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
