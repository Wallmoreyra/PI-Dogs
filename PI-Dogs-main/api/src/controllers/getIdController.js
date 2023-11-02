const axios = require('axios');
const {getDogsByID, getDogsByIDAPI} = require('../utils/auxFunctions');

const getDogByIDController = async (id, source) =>{

    try {
        const dog = source === 'bdd'
            ?await getDogsByID(id)
            :await getDogsByIDAPI(id);
        
            if(source === 'api' && dog === "" || dog === undefined){
                throw new Error("ningun Perro con la ID en la API");
            };
            if(source === "bdd" && dog === "" || dog === undefined){
                throw new Error("ningun Perro con la ID en la DB");
            };
        return dog;

    } catch (error) {
        throw new Error(`Error: no se encontro ${error.message}`);
    }

    
};

module.exports = getDogByIDController;