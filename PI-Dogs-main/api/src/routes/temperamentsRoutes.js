const {Router} = require('express');
const getTemperamentsHandler = require('../handlers/tempsHandler');


const tempRouter = Router();

// peticiones de GET
tempRouter.get("/", getTemperamentsHandler);

module.exports = tempRouter;

