const path = require('path');
const express = require('express');
const router = express.Router();


// const movieController = require('../controller/movieController');
const authController = require('../controller/authController');
// const blogController = require('../controller/blogController');

// router.post('/signUp',authController.signUp)
router.post('/addrecruitingcompany', authController.addRecruitingCompany)
router.get('/getallcompanies', authController.getCompanies)
router.get('/getcompanydata',authController.getCompanydata)
router.post('/verifyphone',authController.verifyPhoneNum)
router.post('/verifyotp',authController.verifyOtp)
// router.get('/isauth',authController.isauth)

module.exports = router;
