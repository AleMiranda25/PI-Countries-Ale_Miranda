//
const { Country, Activity } = require("../../db");
const { json } = require("sequelize");

//* Traigo toda la info de la bdd

module.exports = async () => {
  try {
    const dbCountries = await Country.findAll({
      include: {
        model: Activity,
      },
    });
    return dbCountries;
  } catch (error) {
    return json({ error: error.message });
  }
};
