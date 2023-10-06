module.exports = {
  routes: [
    {
      method: "GET",
      path: "/doctors/:id/patients",
      handler: "doctor.findPatientsOfDoctor",
    },
  ],
};
