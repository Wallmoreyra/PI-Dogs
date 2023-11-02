const {API_KEY, IMG_URL, API_NAME_URL} = process.env;
const {Dogs} = require('../db');
const {Temperaments} = require('../db');
const { Sequelize } = require('sequelize');
const {Op} = require('sequelize');
const axios = require('axios');

const dogsFromDB = async (name) => {

    //busco los dogs en la DB que coincide con el name
    const dogsDB = await Dogs.findAll({where: {
        [Op.or]: [
            Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), {
              [Op.iLike]: `%${name.toLowerCase()}%`
            })
        ]}
    });
    //obtengo un array con la id de los dogs
    const dogsID = dogsDB.map(dog => dog.id);

    const arrayDog = [];

    for(const id of dogsID){
        try{
            const dogInfo = await getDogsByID(id);
            arrayDog.push(dogInfo);
        } catch (error) {
            console.error(`Error al obtener datos del perro con ID ${id}: ${error.message}`);
        }
    };

    //console.log(arrayDog);
    return arrayDog;
};

const getDogsByID = async (id) => {
    const dogi = await Dogs.findByPk(id, {
        include: Temperaments.name,
    });

    const tempsWhitDog = await dogi.getTemperaments();

    return dogAndTemp = {
        img: dogi.img,
        name: dogi.name,
        height: dogi.height,
        weight: dogi.weight,
        lige_span:dogi.life_span,
        temperaments: tempsWhitDog.map(temperaments => temperaments.name)
    };
};

const dogsFromAPI = async (name) => {

    //-----------peticion de la api por medio de apykey sin usar la otra ruta

    // try{
    //     const infoApi = (await axios.get('https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}')).data;
    //     const dogsApi = infoCleanerApi(infoApi);
    //     const dogsFiltered = dogsApi.filter(dogs => dogs.name.toLowerCase().includes(name.toLowerCase()));
    //     return dogsFiltered;
        
    // } catch (error) {
    //     console.error(`Error al obtener datos del perro con name: ${name}: ${error.message}`);
    // }

    try{
        const infoApi = (await axios.get(`${API_NAME_URL}${name}&api_key=${API_KEY}`)).data;
        const dogsApi = infoCleanerApi(infoApi);
        //const dogsFiltered = dogsApi.filter(dogs => dogs.name.toLowerCase().includes(name.toLowerCase()));
        //console.log(dogsFiltered);
        //console.log(dogsApi);
        
        return dogsApi;
        
    } catch (error) {
        console.error(`Error al obtener datos del perro con name: ${name}: ${error.message}`);
    }

};

const infoCleanerApi = (array) => {

    return array.map((dog) => {
        const imgDefault = IMG_URL;
        const imgDog = dog.image.url;
        const imagenDog = (imgDog === "" || imgDog === null) ? imgDefault : imgDog
        const tempsDefault = ['Gay','Loyal','Playful'];
        const arrayTemps = dog.temperament ? dog.temperament.split(', ').map(item => item.trim()) : tempsDefault;
        return {
            img: imagenDog,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.weight.metric,
            lige_span: dog.life_span,
            temperaments: arrayTemps,
            created:false
        };
    });
};

module.exports = {dogsFromDB, dogsFromAPI};