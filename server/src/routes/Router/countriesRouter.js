const { Router } = require("express");
const getCountriesHandler = require("../Handlers/getCountriesHandler");
const getCountriesByIdHandler = require("../Handlers/getCountriesByIdHandler");

const countriesRouter = Router();

//* Obtiene todos los paises
countriesRouter.get("/", getCountriesHandler);
//* Obtiene un pais por ID
countriesRouter.get("/:id", getCountriesByIdHandler);

module.exports = countriesRouter;
