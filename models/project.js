'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /project
 */
module.exports = {
    /**
     * summary: Create porject
     * description: 
     * parameters: project
     * produces: 
     * responses: 201, default
     * operationId: 
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/project',
                operation: 'post',
                response: '201'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/project',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Update porject name
     * description: 
     * parameters: id, name
     * produces: 
     * responses: 204, default
     * operationId: 
     */
    put: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/project',
                operation: 'put',
                response: '204'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/project',
                operation: 'put',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Delete project
     * description: 
     * parameters: projectId
     * produces: 
     * responses: 204, default
     * operationId: 
     */
    delete: {
        204: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/project',
                operation: 'delete',
                response: '204'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/project',
                operation: 'delete',
                response: 'default'
            }, callback);
        }
    }
};
