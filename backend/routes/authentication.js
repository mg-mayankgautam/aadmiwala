const path = require('path');
const express = require('express');
const router = express.Router();


// const movieController = require('../controller/movieController');
const authController = require('../controller/authController');
// const blogController = require('../controller/blogController');

router.post('/signUp',authController.signUp)
// router.post('/login',authController.logIn)
// router.post('/logout',authController.logout)
// router.get('/isauth',authController.isauth)

module.exports = router;
