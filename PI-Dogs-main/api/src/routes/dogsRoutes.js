const {Router} = require('express');
const createDogHandler = require('../handlers/postDogHandler');
const getDogNameHandler = require('../handlers/getNameHandler');
const getDogIDHandler = require('../handlers/getIdHandler');
const getAllDogsHandler = require('../handlers/getAllHandler');


const dogsRouter = Router();

// peticiones de GET
dogsRouter.get("/", getAllDogsHandler);
dogsRouter.get("/idRaza/:id", getDogIDHandler);
dogsRouter.get("/name", getDogNameHandler);


// Peticiones de POST
dogsRouter.post("/", createDogHandler);

module.exports = dogsRouter;