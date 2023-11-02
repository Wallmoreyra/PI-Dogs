const axios = require('axios');
const {dogsFromDB, dogsFromAPI} = require('../utils/auxFunctions');

const getDogByName = async (name) => {

    try {
        let dogsPorName = []
        const arrayDogDB = await dogsFromDB(name);
        const arrayDogAPI = await dogsFromAPI(name);
        dogsPorName = ([...arrayDogDB, ...arrayDogAPI]).slice(0, 20);

        if(dogsPorName.length === 0){
            throw new Error("No se encontro ningun Perro con ese nombre!!!");
        }
        return(dogsPorName);

    } catch (error) {
        throw new Error(`Error al tratar de buscar dogs por name: ${error.message}`);
    };

};


module.exports = getDogByName;