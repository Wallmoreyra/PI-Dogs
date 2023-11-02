const getAllDogsController = require('../controllers/getAllController');

const getAllDogsHandler = async (req, res) => {

    try{
        const response = await getAllDogsController();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    
};


module.exports = getAllDogsHandler;

