'use strict';

/**
 * patient-hospitalization service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::patient-hospitalization.patient-hospitalization');
