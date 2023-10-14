'use strict';

/**
 * patient-appointment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::patient-appointment.patient-appointment');
