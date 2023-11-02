const {dogsFromDB, dogsFromAPI} = require('../utils/auxFunctions');

const getAllDogsController = async () => {
    //return("chupala gato!!!");
    //res.status(200).send("es el get de dogs!!");
    try {
        let allDogs = []
        const arrayDogDB = await dogsFromDB();
        const arrayDogAPI = await dogsFromAPI();
        allDogs = ([...arrayDogDB, ...arrayDogAPI]).slice(0, 20);
        

        if(allDogs.length === 0){
            throw new Error("No se pudieron traer los Dogs!!");
        }
        return(allDogs);

    } catch (error) {
        throw new Error(`Error al tratar de buscar todos los Dogs: ${error.message}`);
    };
};

module.exports = getAllDogsController;