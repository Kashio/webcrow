'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /directory
 */
module.exports = {
    /**
     * summary: Create directory
     * description: 
     * parameters: directory
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
                path: '/directory',
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
                path: '/directory',
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
                path: '/directory',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Update directory name
     * description: 
     * parameters: projectId, directoryId, name
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
                path: '/directory',
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
                path: '/directory',
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
                path: '/directory',
                operation: 'put',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Delete directory
     * description: 
     * parameters: projectId, directoryId
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
                path: '/directory',
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
                path: '/directory',
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
                path: '/directory',
                operation: 'delete',
                response: 'default'
            }, callback);
        }
    }
};
