const getDogByName = require('../controllers/getNameController');

const getDogNameHandler = async (req, res) => {
    const {name} = req.query;

    try {
        const dogByName = await getDogByName(name);
        res.status(200).json(dogByName);
    } catch (error) {
        res.status(400).json({error:error.message});
    }; 

};

module.exports = getDogNameHandler;