'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /report
 */
module.exports = {
    /**
     * summary: Get report
     * description: 
     * parameters: id
     * produces: application/json
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
                path: '/report',
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
                path: '/report',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Delete report
     * description: 
     * parameters: id
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
                path: '/report',
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
                path: '/report',
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
                path: '/report',
                operation: 'delete',
                response: 'default'
            }, callback);
        }
    }
};
