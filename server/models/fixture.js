'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: 
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/fixture',
                operation: 'post',
                response: '201'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/fixture',
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
                path: '/fixture',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Update fixture details
     * description: 
     * parameters: entryPath, name, page, username, password
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
                path: '/fixture',
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
                path: '/fixture',
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
                path: '/fixture',
                operation: 'put',
                response: 'default'
            }, callback);
        }
    }
};
