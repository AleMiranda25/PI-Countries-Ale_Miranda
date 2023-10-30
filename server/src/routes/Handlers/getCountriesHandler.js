//Imports
const getAllCountries = require("../Controllers/getAllCountries");
const getCountriesByName = require("../Controllers/getCountriesByName");

//*

module.exports = async (req, res) => {
  const { name } = req.query;
  try {
    const optionCountry = name
      ? await getCountriesByName(name)
      : await getAllCountries();
    res.status(200).json(optionCountry);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};
