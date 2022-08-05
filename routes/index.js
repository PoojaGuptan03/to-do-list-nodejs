const express = require('express');

const router = express.Router();

const homeController = require('../controller/home_controller')

router.get('/',homeController.home)
router.post('/add-task',homeController.newtask)
router.get('/delete-content',homeController.delete)

module.exports = router;