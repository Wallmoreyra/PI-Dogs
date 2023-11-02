const getDogByIDController = require('../controllers/getIdController');

const getDogIDHandler = async (req, res) => {
    const {id} = req.params;

    const source = isNaN(id) ? "bdd" : "api";
    try {
        const response = await getDogByIDController(id, source)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
};

module.exports = getDogIDHandler;