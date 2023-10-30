const { Router } = require("express");
// Importo todos los routers
const countriesRouter = require("./Router/countriesRouter");
const activitiesRouter = require("./Router/activitiesRouter");
const getApiCountries = require("./Controllers/getApiCountries");

const router = Router();

// Configuro los routers
getApiCountries();
router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);

module.exports = router;
