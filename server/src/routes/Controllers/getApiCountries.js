//
const axios = require("axios");
const { Country } = require("../../db");
const { json } = require("sequelize");
const { cleanData } = require("../../utils/functions");
//* Traigo toda la info de la api

module.exports = async () => {
  try {
    const apiDataRaw = (await axios.get("http://localhost:5000/countries"))
      .data;
    const myData = cleanData(apiDataRaw);
    // console.log(myData);
    await Country.bulkCreate(myData);
  } catch (error) {
    return json({ error: error.message });
  }
};
