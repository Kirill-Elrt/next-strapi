"use strict";

/**
 * doctor controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::doctor.doctor", ({ strapi }) => ({
  async findPatientsOfDoctor(ctx) {
    const doctorId = ctx.params.id;
    const doctor = await strapi.db.query("api::doctor.doctor").findOne({
      populate: ["cabinet"],
      where: {
        id: doctorId,
      },
    }); //
    const PatientsOfDoctor = await strapi.db
      .query("api::patient.patient")
      .findMany({
        populate: {
          cabinet: {},
        },
        where: {
          cabinet: {
            name: doctor.cabinet.name,
          },
        },
      });
    return PatientsOfDoctor;
  },
}));
