const getAllCountries = require("./getAllCountries");

module.exports = async (name) => {
  const countries = await getAllCountries();
  const result = await countries.filter((el) =>
    el.name.toLowerCase().includes(name.toLowerCase())
  );
  if (result.length > 0) return result;
  else throw Error("Error al buscar países: No se encontraron países");
};
