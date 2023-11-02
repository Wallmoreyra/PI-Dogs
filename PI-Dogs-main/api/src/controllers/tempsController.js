const axios = require ('axios');
const { Temperaments } = require ('../db');
const {API_KEY} = process.env;

let tempsAgregados = null;

const getTemperamentsController = async () => {

    try {
        if(tempsAgregados === null) {
            const temperaments = await tempsFromAPI();
            tempsEnDB(temperaments);
            tempsAgregados = temperaments;
            return temperaments;
        }
    } catch (error) {
        throw new Error('Error al pedir los temperamentos!!!');
    }
};

const tempsFromAPI = async () => {
    const infoApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
    const temporalTemps = [];

    for (const item of infoApi) {
        if(item.temperament){
            const indivTemper = item.temperament.split(', ');
            temporalTemps.push(...indivTemper);
        }
    }
    const tempsFiltrados = [...new Set(temporalTemps)];
    return tempsFiltrados;
};

const tempsEnDB = async (array) => {
    for (const tempName of array) {
        try {
        // Comprobar si el temperamento ya existe en la base de datos
            const tempExist = await Temperaments.findOne({ where: { name: tempName } });
            
            if (!tempExist) {
                //si no existe se crea
                const temperament = await Temperaments.create({name: tempName});
            }else {
                console.error(`El temperamento de nombre: ${tempName} ya existe!!!`);
            };

        } catch (error) {
          console.error(`Error al tratar de guardar los nombres!!!`, error);
        }
      }
};


module.exports = getTemperamentsController;