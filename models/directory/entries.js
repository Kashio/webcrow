'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /directory/entries
 */
module.exports = {
    /**
     * summary: Get directory entries
     * description: 
     * parameters: 
     * produces: 
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
                path: '/directory/entries',
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
                path: '/directory/entries',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
