const { Router } = require("express");
const getActivitiesHandler = require("../Handlers/getActivitiesHandler");
const postActivitiesHandler = require("../Handlers/postActivitiesHandler");
const { validateCreate } = require("../../utils/functions");

const activitiesRouter = Router();

//* Permite obtener todas las actividades cargadas
activitiesRouter.get("/", getActivitiesHandler);
//* Permite cargar actividades
activitiesRouter.post("/", validateCreate, postActivitiesHandler);

module.exports = activitiesRouter;
