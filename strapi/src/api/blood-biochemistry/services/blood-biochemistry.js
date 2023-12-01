'use strict';

/**
 * blood-biochemistry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blood-biochemistry.blood-biochemistry');
