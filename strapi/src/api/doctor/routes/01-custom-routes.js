module.exports = {
  routes: [
    {
      method: "GET",
      path: "/doctor/:id/patients",
      handler: "doctor.findPatientsOfDoctor",
    },
  ],
};
