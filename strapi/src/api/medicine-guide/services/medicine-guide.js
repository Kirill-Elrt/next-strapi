'use strict';

/**
 * medicine-guide service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::medicine-guide.medicine-guide');
