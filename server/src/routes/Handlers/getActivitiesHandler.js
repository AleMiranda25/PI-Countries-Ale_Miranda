//* Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.

const getAllActivities = require("../Controllers/getAllActivities");

module.exports = async (req, res) => {
  try {
    const allActivities = await getAllActivities();

    res.status(200).json(allActivities);
  } catch (error) {
    res.status(404).send(error);
  }
};
