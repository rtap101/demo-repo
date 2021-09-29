const express = require('express');
const router = express.Router();
const viewController = require('../controllers/viewController');


router.get('/', viewController.indexView)


module.exports = router;