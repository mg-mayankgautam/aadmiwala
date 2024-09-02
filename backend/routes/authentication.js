const path = require('path');
const express = require('express');
const router = express.Router();
const multer  = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
require("dotenv").config();

const authController = require('../controller/authController');
const mailController = require('../controller/mailController');
const authMiddleware = require('../middlewares/authMiddleware');


// router.post('/signUp',authController.signUp)
router.post('/addrecruitingcompany',upload.array("image"), authController.addRecruitingCompany)
router.get('/getallcompanies', authController.getCompanies)
router.get('/getcompanydata',authController.getCompanydata)
router.get('/getcompanyfilterdata',authController.getfilterCompanydata)


router.post('/verifyphone',authController.verifyPhoneNum)
router.post('/verifyotp',authController.verifyOtp)
router.post('/verifypwdotp',authController.verifyOtpforpwdchange)

router.post('/login',authController.logIn)
router.get('/search',authController.search)
router.get('/isauth',authController.isauth)
router.post('/checkphonenumber',authController.checkPhnNumber);
router.get('/getuserdata',authController.getUserData);
router.post('/updateuserservices',authController.updateUserServices);
router.post('/updateusercities',authController.updateUserCities);
router.post('/updateuserinfo',upload.array("image"),authController.updateUserInfo);
router.post('/deleteuserimage',authController.deleteUserImage);
router.post('/verifynewphone',authController.verifyNewPhone);
router.post('/updateuserphone',authController.updateUserPhone);
router.post('/logout',authController.logout)


router.post('/changepassword',authController.changePassword)


router.post('/forgetpwd',authController.forgotpassword)
router.post('/adminlogin',authController.adminlogin)
router.get('/admininfo', authMiddleware, authController.adminInfo)
router.post('/admindeletecompany', authController.adminDeleteCompany)

router.post('/sharerequirements',mailController.shareRequirements)
router.post('/getintouch',mailController.getInTouch)
router.post('/changepassword',authController.changePassword)





module.exports = router;
