// Dependencias
const { Activity, Country } = require("../../db");
const { json } = require("sequelize");

module.exports = async () => {
  try {
    const dbActivities = await Activity.findAll({
      include: {
        model: Country,
      },
    });
    return dbActivities;
  } catch (error) {
    return json({ error: error.message });
  }
};
