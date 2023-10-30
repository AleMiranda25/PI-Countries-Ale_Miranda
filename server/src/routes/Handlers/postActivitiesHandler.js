//dependencias

const createActivity = require("../Controllers/createActivity");

module.exports = async (req, res) => {
  try {
    // Obtengo los datos necesarios y los almaceno en un objeto
    const objActivity = req.body;
    // Creo una nueva actividad con los datos que vienen por body y los paises relacionados mediante el controller
    const newActivity = await createActivity(objActivity);
    // Envio la respuesta exitosa junto con la nueva actividad
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
