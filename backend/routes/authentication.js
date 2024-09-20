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

//publicRoutes


router.get('/getallcompanies', authController.getCompanies)
router.get('/getcompanydata',authController.getCompanydata)
router.get('/getcompanyfilterdata',authController.getfilterCompanydata)
router.get('/search',authController.search)
router.get('/getallblogs', authController.getAllBlogs)
router.get('/getblogdata', authController.getBlogData)
router.post('/editblogdata',authController.editBlogData);//
router.post('/login',authController.logIn)

// router.post('/signUp',authController.signUp)


//private routes
router.post('/addrecruitingcompany',upload.array("image"), authController.addRecruitingCompany)
router.post('/verifyphone',authController.verifyPhoneNum)
router.post('/verifyotp',authController.verifyOtp)
router.post('/verifypwdotp',authController.verifyOtpforpwdchange)
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
router.post('/adminaddblogs',upload.array("image"), authController.adminAddBlogs)
router.post('/admindeleteblog', authController.adminDeleteBlog)
router.post('/sharerequirements',mailController.shareRequirements)
router.post('/getintouch',mailController.getInTouch)
router.post('/changepassword',authController.changePassword)





module.exports = router;
