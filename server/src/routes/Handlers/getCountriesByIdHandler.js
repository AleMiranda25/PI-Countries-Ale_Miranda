//*
const { Country, Activity } = require("../../db");

module.exports = async (req, res) => {
  const idPais = req.params.id;
  try {
    const country = await Country.findByPk(idPais, {
      include: {
        model: Activity,
      },
    });
    if (country) {
      res.status(200).json(country);
    } else {
      res.status(404).json({ message: "País no encontrado" });
    }
  } catch (error) {
    res.status(404).send(error);
  }
};
