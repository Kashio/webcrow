'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /fixture/code
 */
module.exports = {
    /**
     * summary: Get fixture code
     * description: 
     * parameters: entryPath
     * produces: text/javascript
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
                path: '/fixture/code',
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
                path: '/fixture/code',
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
                path: '/fixture/code',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Update fixture code
     * description: 
     * parameters: entryPath, code
     * produces: 
     * responses: 200, 403, default
     * operationId: 
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/fixture/code',
                operation: 'put',
                response: '200'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/fixture/code',
                operation: 'put',
                response: '403'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/fixture/code',
                operation: 'put',
                response: 'default'
            }, callback);
        }
    }
};
