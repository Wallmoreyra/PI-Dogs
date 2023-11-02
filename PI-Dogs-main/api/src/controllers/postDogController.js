const axios = require('axios');
const { Sequelize, Op } = require('sequelize');
const {API_KEY} = process.env;
const {Dogs} = require('../db');
const {Temperaments} = require('../db');
const getTemperamentsController = require('./tempsController');

const createDogDB = async (img, name, height, weight, life_span, temps) => {

    
    try {
        await getTemperamentsController();
        const existingDogDB = await Dogs.findOne({where: {name}});
        const existingDogAPI = await namesFromAPI();
        const tempsDog = await temps.split(',').map(item => item.trim());
        
        const tempsDB = await Temperaments.findAll({
            where: {
                name: { [Op.iLike]: { [Op.any]: tempsDog } }
            }
        });



        //console.log(tempsDog);
        console.log(tempsDB);
        //console.log(existingDogAPI[0]);
        //console.log(existingDogDB);

        //const namesApi = await namesFromAPI();
        //console.log(namesApi);

        if (existingDogDB) {
            throw new Error("Ya existe la Raza del perro en la DB!!");
        };
        if (existingDogAPI.includes(name.toLowerCase())) {
            throw new Error("Ya existe la Raza del perro en la API!!");
        };
        if (tempsDog.length < 2) {
            throw new Error("Necesita tener mas de un temperamento!!");
        }
        
        const dog = await Dogs.create({
            img, 
            name, 
            height, 
            weight, 
            life_span
        });

        dog.addTemperaments(tempsDB);
        
        return dog;

    }catch (error) {
        throw new Error('Error al crear el Dog en la DB: ' + error.message);
    }
    
   
    
};

const namesFromAPI = async () => {
    const infoApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
    const temporalNames = [];
    for (const item of infoApi) {
        temporalNames.push(item.name.toLowerCase());
    }
    return temporalNames;
};

module.exports = createDogDB;