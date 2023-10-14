'use strict';

/**
 * appointment-diagnosis service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::appointment-diagnosis.appointment-diagnosis');
