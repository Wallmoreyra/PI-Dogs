const createDogDB = require("../controllers/postDogController");


const createDogHandler = async (req, res) => {

    const {img, name, height, weight, life_span, temps} = req.body;

    try{
        const response = await createDogDB(img, name, height, weight, life_span, temps)
        res.status(200).json(response);
    } catch (error){
        res.status(400).json({error:error.message})
    }
};

module.exports = createDogHandler;