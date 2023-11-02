const {Router} = require('express');
const createDogHandler = require('../handlers/postDogHandler');
const getDogNameHandler = require('../handlers/getNameHandler');


const dogsRouter = Router();

// peticiones de GET
dogsRouter.get("/", (req, res) => {
    res.status(200).send("es el get de dogs!!");
});
dogsRouter.get("/idRaza/:id", (req, res) => {
    res.status(200).send("es el get de dogs con ID");
});
dogsRouter.get("/name", getDogNameHandler);


// Peticiones de POST
dogsRouter.post("/", createDogHandler);

module.exports = dogsRouter;