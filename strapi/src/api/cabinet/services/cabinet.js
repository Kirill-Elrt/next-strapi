'use strict';

/**
 * cabinet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cabinet.cabinet');
