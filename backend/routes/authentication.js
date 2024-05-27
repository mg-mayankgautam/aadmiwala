const path = require('path');
const express = require('express');
const router = express.Router();


// const movieController = require('../controller/movieController');
const authController = require('../controller/authController');
// const blogController = require('../controller/blogController');

// router.post('/signUp',authController.signUp)
router.post('/addrecruitingcompany', authController.addRecruitingCompany)
router.get('/getallcompanies', authController.getCompanies)
// router.post('/logout',authController.logout)
// router.get('/isauth',authController.isauth)

module.exports = router;
