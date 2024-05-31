const path = require('path');
const express = require('express');
const router = express.Router();



const authController = require('../controller/authController');



// router.post('/signUp',authController.signUp)
router.post('/addrecruitingcompany', authController.addRecruitingCompany)
router.get('/getallcompanies', authController.getCompanies)
router.get('/getcompanydata',authController.getCompanydata)
router.post('/verifyphone',authController.verifyPhoneNum)
router.post('/verifyotp',authController.verifyOtp)
router.get('/login',authController.logIn)
router.get('/search',authController.search)

module.exports = router;
