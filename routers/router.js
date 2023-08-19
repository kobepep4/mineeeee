let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.get('/', (req, res) => {
    controller.getAllCats(req, res);
});

router.post('/', (req,res)=>{
   controller.postCat(req, res);
// ask the controller to perform db operations
});


module.exports = router;