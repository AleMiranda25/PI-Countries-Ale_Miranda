// imports
const { json } = require("sequelize");

//* Variables utiles
const idioma = Intl.DateTimeFormat().resolvedOptions().locale;

//* Funciones

const validateCreate = (req, res, next) => {
  const { name, difficulty, duration, season, countries } = req.body;
  if (!name || !difficulty || !duration || !season)
    res.status(400).json({ error: "Missing data" });
  if (difficulty < 1 || difficulty > 5)
    res.status(400).json({ error: "Select a valid duration" });
  if (countries < 1)
    res.status(400).json({ error: "Select at least one Country" });
  next();
};

const cleanData = (arr) =>
  arr.map((ele) => {
    return {
      id: ele.cca3,
      name: idioma.includes("es")
        ? ele.translations.spa.common
        : ele.name.common,
      flagImage: ele.flags.png,
      capital:
        typeof ele.capital === "undefined" ? "Sin Capital" : ele.capital[0],
      continent: ele.region,
      subregion: ele.subregion ? ele.subregion : "Sin subregion",
      area: ele.area,
      population: ele.population,
    };
  });

module.exports = {
  validateCreate,
  cleanData,
};
