const { Activity } = require("../../db");
const { json } = require("sequelize");

module.exports = async (ActivityObj) => {
  try {
    const { name, difficulty, duration, season, countries } = ActivityObj;
    const activity = {
      name,
      difficulty,
      duration,
      season,
    };

    const createdActivity = await Activity.create(activity);
    createdActivity.addCountry(countries);

    return await Activity.findAll();
  } catch (error) {
    return json({ error: error.message });
  }
  //   const { name, difficulty, duration, season, countries } = req.body;
  //   try {
  //     const activity = await Activity.create({
  //       name,
  //       difficulty,
  //       duration,
  //       season,
  //     });

  //     await activity.setCountries(countries);

  //     res.status(200).send({ message: "Actividad creada satisfactoriamente" });
  //   } catch (error) {
  //     res.status(404).send({ message: "Error al crear actividad: " + error });
  //   }
};
