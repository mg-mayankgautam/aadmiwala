const path = require('path');
const express = require('express');
const router = express.Router();
const multer  = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
require("dotenv").config();

const authController = require('../controller/authController');



// router.post('/signUp',authController.signUp)
router.post('/addrecruitingcompany',upload.array("image"), authController.addRecruitingCompany)
router.get('/getallcompanies', authController.getCompanies)
router.get('/getcompanydata',authController.getCompanydata)
router.post('/verifyphone',authController.verifyPhoneNum)
router.post('/verifyotp',authController.verifyOtp)
router.post('/login',authController.logIn)
router.get('/search',authController.search)

module.exports = router;
