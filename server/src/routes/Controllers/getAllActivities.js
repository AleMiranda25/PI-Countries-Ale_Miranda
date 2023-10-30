// Dependencias
const { Activity } = require("../../db");
const { json } = require("sequelize");

module.exports = async () => {
  try {
    const dbActivities = await Activity.findAll();
    return dbActivities;
  } catch (error) {
    return json({ error: error.message });
  }
};
