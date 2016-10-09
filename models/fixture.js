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
     * parameters: projectId, directoryId, fixtureId, name, page, username, password
     * produces: 
     * responses: 204, 403, default
     * operationId: 
     */
    put: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/fixture',
                operation: 'put',
                response: '204'
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
    },
    /**
     * summary: Delete fixture
     * description: 
     * parameters: projectId, directoryId, fixtureId
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
                path: '/fixture',
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
                path: '/fixture',
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
                path: '/fixture',
                operation: 'delete',
                response: 'default'
            }, callback);
        }
    }
};
