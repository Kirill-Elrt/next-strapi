"use strict";

/**
 * patient service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::patient.patient", ({ strapi }) => ({
  async find(...args) {
    const { results, pagination } = await super.find(...args);
    return { results, pagination };
  },
}));
