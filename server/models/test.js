'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /test
 */
module.exports = {
    /**
     * summary: Create test
     * description: 
     * parameters: entryPath, test
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
                path: '/test',
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
                path: '/test',
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
                path: '/test',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Update test name
     * description: 
     * parameters: entryPath, testId, name
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
                path: '/test',
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
                path: '/test',
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
                path: '/test',
                operation: 'put',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Delete test
     * description: 
     * parameters: entryPath, testId
     * produces: 
     * responses: 204, 403, default
     * operationId: 
     */
    delete: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/test',
                operation: 'delete',
                response: '204'
            }, callback);
        },
        403: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/test',
                operation: 'delete',
                response: '403'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/test',
                operation: 'delete',
                response: 'default'
            }, callback);
        }
    }
};
