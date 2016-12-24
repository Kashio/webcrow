'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /record
 */
module.exports = {
    /**
     * summary: Get page for recording
     * description: 
     * parameters: page
     * produces: text/html
     * responses: 200, default
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/record',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/record',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
