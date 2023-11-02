const getTemperamentsController = require('../controllers/tempsController');

const getTemperamentsHandler = async(req, res) => {
    try {
        const tempsAPI = await getTemperamentsController();
        res.status(200).json(tempsAPI);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};


module.exports = getTemperamentsHandler;