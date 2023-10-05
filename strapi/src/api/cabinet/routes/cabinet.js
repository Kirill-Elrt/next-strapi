'use strict';

/**
 * cabinet router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cabinet.cabinet');
