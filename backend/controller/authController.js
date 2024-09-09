// require('dotenv').config();

const companyDB = require("../models/companyDB.js");
const otpDB=require("../models/otpDB.js")
const userDB=require("../models/usersDB.js")
const adminDB=require("../models/adminDB.js")
const blogsDB=require("../models/blogsDB.js")

var axios = require('axios');

const accountSid=process.env.TWILIO_ACCOUNT_SID;
const authToken=process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')('ACf7dcdf5392bef8bfc0b9e42b9a11cb1c','975b7584a795956a40808329e7662f33');

const jwt = require('jsonwebtoken');


module.exports.verifyOtp=async(req, res)=>{
    
    const phone = req.body.phone;
  
    const Otp= req.body.OTP;

    console.log(phone);

    const OTP = Number(Otp);
    const Phone = Number(phone);


    otpDB.findOneAndDelete({Phone, OTP})
    .then((saved)=>{

        // console.log(saved)
        if(saved){res.send(true);}
        else res.send(false);
    })
    .catch( err =>{
        console.error(err)
        res.send(false)
    })

}

module.exports.verifyOtpforpwdchange=async(req, res)=>{
    
    const phone = req.body.phone;
  
    const Otp= req.body.OTP;

    console.log(phone);

    const OTP = Number(Otp);
    const Phone = Number(phone);


    otpDB.findOne({Phone, OTP})
    .then((saved)=>{

        // console.log(saved)
        if(saved){res.send(true);}
        else res.send(false);
    })
    .catch( err =>{
        console.error(err)
        res.send(false)
    })

}


module.exports.verifyPhoneNum = async(req,res) =>{

    const phone = req.body.phone;
    const Phone = Number(phone);
    
    const OTP = `${Math.floor(1000+Math.random()*9000)}`;

    // const sendSMS= async(body)=>{

    //     let msgOptions = {
    //         from: '+13642047179',
    //         to: phone,
    //         body,
    //     };
    //     try{
            

    //         let newotpentry = new otpDB({Phone, OTP});
            
           
    //         newotpentry.save()
    //             .then(async(saved)=>{
    //                 console.log('otp added success');
                    
    //             // const message = await client.messages.create(msgOptions);    
    //                 //res.send(true);                    
    //             })
    //             .catch(err =>{
    //                 console.log(err);
    //                 res.send(false);
    //             });


           


    //         res.send(true);
    //     }catch(e){console.log(e);}
    // }

    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://2factor.in/API/V1/9dfd8b94-1f26-11ef-8b60-0200cd936042/SMS/${phone}/${OTP}/JNSHKOTP`,
        headers: { }
      };

      axios(config)
        .then(function (response) {

            let newotpentry = new otpDB({Phone, OTP});
            
           
            newotpentry.save()
                .then(async(saved)=>{
                    console.log('otp added success');
                    
                // const message = await client.messages.create(msgOptions);    
                    //res.send(true);                    
                })
                .catch(err =>{
                    console.log(err);
                    res.send(false);
                });


            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });



    //Twilio
   // sendSMS(`hello from admiwala your OTP is${OTP}`);
   
    res.send(true);

}


const { S3Client,PutObjectCommand  } = require("@aws-sdk/client-s3");
const multer  = require('multer')
const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })
const crypto = require('crypto');


const bucketName = "aadmiwala"
const bucketRegion ="ap-south-1"
const accessKeyId = "AKIA6GBMBOXSMOJLY6XA"
const secretAccessKey = "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"


const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const {  GetObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
    region:bucketRegion,
    credentials: {
      accessKeyId,
      secretAccessKey
    }
  })

const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');




module.exports.checkPhnNumber =async(req,res)=>{

    const PhoneNum = req.body.phonenum;
    const Phone = Number('+91' + PhoneNum)
        console.log('phone', Phone);

    try{
        const phn = await userDB.findOne({Phone},{Phone:1});
        if(phn){
            res.send(true);
            console.log(phn);

        }
        else{
            console.log(phn);
            res.send(false);
        }
        
    }
    catch(err){console.log(err)}
    
}


const nodemailer = require('nodemailer');


module.exports.addRecruitingCompany= async (req,res)=>{

    // console.log('req.files',req.files);
    // console.log('working backend',req.body);

    const {image,fullName, email, phone, companyName, GSTno, agencyBriefing, servicetype, priceRange, country, address, City, Flexi, pwd} = req.body;

    const flexi = JSON.parse(Flexi)

    const imgsarray = req.files;
    const Phone = Number(phone);

    console.log(flexi, 'flexi')

    const user = await userDB.findOne({Phone});

    if(!user){

        const imageURLs = []

        for (const img of imgsarray){
        // console.log(img);
            const fileName = generateFileName();


            const uploadParams = {
                Bucket: bucketName,
                Body: img.buffer,
                Key: fileName,
                ContentType: img.mimetype
            }

            await s3Client.send(new PutObjectCommand(uploadParams));
            const URL = `https://aadmiwala.s3.ap-south-1.amazonaws.com/${fileName}`
            //  console.log(URL);
            
            imageURLs.push({url:URL,fileName:fileName})

        }

        
    

        const serviceType = servicetype.split(',')
        const city = City.split(',')

        //    const postedDate = new Date();
        //    const date = postedDate.toDateString()

        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                let newDate = new Date()
                let day = newDate.getDate();
                let month = monthNames[newDate.getMonth()];
                let year = newDate.getFullYear();
                const date = `${month} ${day}, ${year}`
        console.log(date);

    

        let newCompany = new companyDB({fullName, email, Phone, companyName, GSTno, agencyBriefing, serviceType, priceRange, country, address, city, imageURLs, date, flexi});



        newCompany.save()
            .then((saved)=>{
                console.log('company added success');
                // res.send(true);
                
            })
            .catch(err =>{console.log(err);});


        let newUser = new userDB({Phone, pwd})

        newUser.save()
                .then((saved)=>{
                    console.log('user added success');
                    res.send(true);

                    let transporter = nodemailer.createTransport({
                        service : 'gmail',
                        auth : {
                            user: 'noreply.covendx@gmail.com',
                            pass: 'ivukyxozcrduxwau'
                        }
                    });
                
                    
                
                    let mailContent = {
                        from : 'noreply.covendx@gmail.com',
                        to : email,
                        subject: `Welcome to Covendx!`,
                        text: 
                            `Welcome to Covendx, your trusted partner in the world of vendor solutions! 🌟 
                            At Covendx, we prioritize your security and trust. As you embark on your journey with us, rest assured that your login process is safeguarded and protected. 
                            Our commitment goes beyond just bridging the gap between companies and vendor agencies. We understand the critical importance of having the right personnel to drive your business forward, and we are dedicated to connecting you with the perfect vendor solutions tailored to your unique needs. 
                            Your decision to join Covendx marks the beginning of a fruitful partnership, where your security and satisfaction are our top priorities. As you explore our platform, you'll discover a seamless and secure environment designed to enhance your staffing experience.
                            Should you have any questions or concerns regarding your account security, please don't hesitate to reach out to us at covendx@gmail.com. Our team is here to ensure that your journey with Covendx is safe, trusted, and successful.
                            Thank you for entrusting Covendx as your staffing solutions partner. We're excited to support your business growth and success!

                            Best regards,
                            Covendx
                            covendx@gmail.com `
                    }
                
                
                
                    transporter.sendMail(mailContent,function(err,val){
                        if(err){
                            console.log(err)
                        }else{console.log(val.response,'mail sent success')}
                
                    })
                    
                })
                .catch(err =>{console.log(err);});


    }
        

}


module.exports.getCompanies =async (req, res) =>{

    try{
        let company= await companyDB.find({})
    
        res.send(company);
    }
    catch(err){console.log(err)}
}


module.exports.logIn = async (req,res)=>{

    const {PhoneNum, Pwd} = req.body; 
    console.log(PhoneNum, Pwd);
    const pwd = Pwd;
    const phonenum = '+91' + PhoneNum;
    const Phone = Number(phonenum);

    let user = await userDB.findOne({Phone,pwd});
   
   console.log(user);

    
    if(user){
        console.log('welcome')
         req.session.Username=Phone;
         req.session.UserID=user._id.toString();
         res.json({Username:req.session.Username})
        //res.json(true)
    }
    else if(!user){
        res.json(false)
    }


}



module.exports.logout = async (req,res)=>{

    try{
        req.session.destroy();
        console.log('logged out');
        res.send();

     //   res.send(false);
    }
    catch(err){console.log(err)}
}






module.exports.isauth=async (req,res)=>{
 console.log('isauth controller');
    if(!req.session.Username){
     

       
    


    
    res.send({auth:false})}


        else if(req.session.Username){

          
         
         
           
             res.send({auth:req.session.Username})}



}


module.exports.getCompanydata=async(req,res)=>{
    try{
        const _id = req.query.id;
        let companydata = await companyDB.findOne({_id});
    
        res.send(companydata);
    }
    catch(err){console.log(err)}
}

module.exports.getfilterCompanydata=async(req,res)=>{

    const _id = req.query.id;
    let companydata = await companyDB.findOne({_id});
    
    const cities = companydata.city;
    const services = companydata.serviceType;

    let citiesfilter = await companyDB.find({
        _id: { $ne: _id },
        city: { $in: cities }
    });

    let servicesfilter = await companyDB.find({
        _id: { $ne: _id },
        serviceType: { $in: services }
    });
    
    // console.log(citiesfilter);
    // console.log(servicesfilter);

    res.send({citiesfilter, servicesfilter});
 }


module.exports.search= async(req, res)=>{

    console.log('here',req.query);
    const type = req.query.type;
    const input = req.query.input;

    if(input==='Flexi Services'){
        try{
            let searchdata = await companyDB.find({'flexi.flexi': true });

            console.log(searchdata);

            if(searchdata.length>0){
                return res.send(searchdata);
            }else return res.send(false);
        }
        catch(err){console.log(err);}
    }

    if(type==='service'){
        
        try{
            let searchdata = await companyDB.find({serviceType: input});

            console.log(searchdata);

            if(searchdata.length>0){
            res.send(searchdata);
            }else res.send(false);
        }
        catch(err){console.log(err);}
    }

    if(type==='city'){
        try{
            let searchdata = await companyDB.find({city: input});
            
            if(searchdata.length>0){
                res.send(searchdata);
            }else res.send(false);
        }
        catch(err){console.log(err);}
    }
    
}


module.exports.getUserData =async(req,res)=>{
 
     //console.log(req.query.username, 'get username') 
     //const userID=req.session.UserID
     const Phone = req.query.id;
     console.log(req.query, req.session.Username)
    
    //  if(req.session.Username==Phone){
        try{
            const data = await companyDB.findOne({Phone})
            console.log(data,'found user');
            
            res.send(data);
          }
          catch(e){console.log(e)}
    //  }
    
    
}


module.exports.updateUserServices = async(req, res) => {
    const {id, newServiceType} = req.body;
    // console.log('reaching here', req.body);

    // if(req.session.Username==id){

        try{
            await companyDB.findOneAndUpdate({Phone:id},{serviceType: newServiceType}, {returnDocument: 'after'})
                .then((saved)=>{
                    // console.log(saved, 'updated services')
                    res.send(saved.serviceType)
                })
                .catch((e)=>{console.log(e)})
        }
        catch(e){console.log(e)}

    // }
}



module.exports.updateUserCities = async(req, res) => {
    const {id, newCity} = req.body;
    // console.log('reaching here', req.body);

    // if(req.session.Username==id){

        try{
            await companyDB.findOneAndUpdate({Phone:id},{city: newCity}, {returnDocument: 'after'})
                .then((saved)=>{
                    // console.log(saved, 'updated services')
                    res.send(saved.city)
                })
                .catch((e)=>{console.log(e)})
        }
        catch(e){console.log(e)}

    // }
}


module.exports.updateUserInfo = async(req, res) => {


    const {fullName, email, phone, companyName, GSTno, agencyBriefing, priceRange,address} = req.body;
     console.log('req.body', req.body);
     console.log('req.files', req.files);

    const imgsarray = req.files;
    const Phone = Number(phone);


    const user = await companyDB.findOne({Phone});
    console.log('user', user);

    if(user){

        try{
            
            const imageURLs = user.imageURLs;
            console.log('imageURLs', imageURLs);

            for (const img of imgsarray){
                // console.log(img);
                const fileName = generateFileName();


                const uploadParams = {
                    Bucket: bucketName,
                    Body: img.buffer,
                    Key: fileName,
                    ContentType: img.mimetype
                }

                await s3Client.send(new PutObjectCommand(uploadParams));
                const URL = `https://aadmiwala.s3.ap-south-1.amazonaws.com/${fileName}`
                //  console.log(URL);
                
                imageURLs.push({url:URL,fileName:fileName})

            }

            await companyDB.findOneAndUpdate({Phone}, {fullName: fullName, email: email, companyName: companyName, agencyBriefing: agencyBriefing, priceRange: priceRange, GSTno: GSTno, address: address, imageURLs: imageURLs}, {returnDocument: 'after'})
                .then((saved)=>{
                    // console.log(saved, 'updated services')
                    res.send(saved)
                })
                .catch((e)=>{console.log(e)})
        }
        catch(e){console.log(e)}

    }
}



module.exports.deleteUserImage =async(req, res)=>{
    const {id, filename} =req.body;
    console.log(id, filename)

    const company = await companyDB.findOne({Phone:id});
    const images = company.imageURLs;

    const index = images.findIndex(img => {return img.fileName ===filename})

    images.splice(index,1);

    
    const deleteParams = {
        Bucket: bucketName,
        // Body: img.buffer,
        Key: filename,
        // ContentType: img.mimetype
    }


   await companyDB.findOneAndUpdate({Phone:id},{imageURLs: images}, {returnDocument: 'after'})

    .then(async(saved)=>{
        // await s3Client.send(new DeleteObjectCommand(deleteParams));

        res.send('deleted', saved.imageURLs)
    })
    .catch((e)=>{console.log(e)})
    
    // try{ await s3Client.send(new DeleteObjectCommand(deleteParams));

    //     res.send('deleted', saved.imageURLs)}
    //     catch(e){console.log(e)}
   

}

module.exports.verifyNewPhone = async(req, res) =>{
    
    //const newPwd = req.body.newPwd;

    const newPhone = req.body.newPhone;
    const phone = '+91' + newPhone
    // console.log(newPwd,phone)

    const Phone = Number(phone);
    
    const OTP = `${Math.floor(1000+Math.random()*9000)}`;

    

    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://2factor.in/API/V1/9dfd8b94-1f26-11ef-8b60-0200cd936042/SMS/${phone}/${OTP}/JNSHKOTP`,
        headers: { }
    };

    axios(config)
    .then(function (response) {

            let newotpentry = new otpDB({Phone, OTP});
            
           
            newotpentry.save()
                .then(async(saved)=>{
                    console.log('otp added success');
                    
                // const message = await client.messages.create(msgOptions);    
                    res.send(true);                    
                })
                .catch(err =>{
                    console.log(err);
                    res.send(false);
                });


            console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });


}


module.exports.updateUserPhone =async(req,res)=>{

    const{id, newOTP, newPhone, newPwd}=req.body;

    const OTP = Number(newOTP);
    const phone = '+91' + newPhone;
    const Phone = Number(phone);


    await otpDB.findOneAndDelete({Phone, OTP})
    .then(async(saved)=>{

        if(saved){
            await companyDB.findOneAndUpdate({Phone:id}, {Phone:Phone}, {returnDocument: 'after'})
                .then((saved)=>{
                    // console.log(saved, 'updated services')
                    // res.send(saved)
                })
                .catch((e)=>{console.log(e)})
            
            await userDB.findOneAndUpdate({Phone:id}, {Phone:Phone, pwd:newPwd}, {returnDocument: 'after'})
                .then(async(saved)=>{
                    console.log('updated pwd and phone')
                    await req.session.destroy();
                    res.send(saved)
                })
                .catch((e)=>{console.log(e)})
        }
        else {
            res.send(false);
        }
    })
    .catch( err =>{
        console.error(err)
        res.send(false)
    })
}

///use this for admin signup
// module.exports.adminlogin=async(req,res)=>{

//     console.log(req.body);
//    let ID=req.body.ID;
//    let Pwd=req.body.Pwd

//    let newAdmin = new adminDB({ID,Pwd})

//    newAdmin.save()
 
//             .then((saved)=>{
//                 console.log('adminuser added success');
//                 // res.send(true);
                
//             })
//             .catch(err =>{console.log(err);});
// }


module.exports.adminlogin=async(req,res)=>{

    console.log(req.body);
   let ID=req.body.ID;
   let Pwd=req.body.Pwd

   
   let Admin = await adminDB.findOne({ID,Pwd});

    if(!Admin){
        res.send(false)
    }
    else if(Admin){

        const user = {role: 'Admin', username: ID, password: Pwd}

        if (!process.env.ACCESS_TOKEN_SECRET){
            throw new Error('JWT secret key is not defined');
        }

        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
        res.json({accessToken: accessToken})
    }

}

module.exports.adminInfo=async(req,res)=>{

    // console.log(req.user, 'here')
    try{
        let companies= await companyDB.find({})
   
        res.send(companies);
    }
    catch(err){console.log(err)}
}


module.exports.adminDeleteCompany=async(req,res)=>{

    console.log(req.body.companyToDelete, 'here')
    const _id = req.body.companyToDelete.companyID;
    const Phone = req.body.companyToDelete.Phone;
    
    companyDB.findOneAndDelete({_id})
    .then((saved)=>{

        // console.log(saved)
        if(saved){
            userDB.findOneAndDelete({Phone})
            .then((saved2)=>{
        
                // console.log(saved, saved2)
                if(saved2){
                    res.send(saved);
                }
                else res.send(false);
            })
            .catch( err =>{
                console.error(err)
                res.send(false)
            })
        }
        else res.send(false);
    })
    .catch( err =>{
        console.error(err)
        res.send(false)
    })
}

module.exports.forgotpassword=async(req,res)=>{



    console.log(
        req.body
    );

     const PhoneNum = req.body.PhoneNum;
    
     const Phone = Number('+91' + PhoneNum)
    //     console.log('phone', Phone);

    try{
        const phn = await userDB.findOne({Phone},{Phone:1});
        
        if(phn){
           // generate OTP and return true


           
            
    
            const OTP = `${Math.floor(1000+Math.random()*9000)}`;

    

            var config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://2factor.in/API/V1/9dfd8b94-1f26-11ef-8b60-0200cd936042/SMS/${Phone}/${OTP}/JNSHKOTP`,
                headers: { }
              };

            axios(config)
              .then(function (response) {

                let newotpentry = new otpDB({Phone, OTP});
            
           
                newotpentry.save()
                    .then(async(saved)=>{
                     console.log('otp added success');
                    
                    // const message = await client.messages.create(msgOptions);    
                    //res.send(true);                    
                    })
                    .catch(err =>{
                    console.log(err);
                    res.send(false);
                });                
               })
               .catch(function (error) {
                console.log(error);
               });



   
   
                res.send(true);

        

        }
        //IF (PHN) ENDS
        else{
            console.log(phn);
            res.send(false);
        }
        
    }
    catch(err){console.log(err)}

}


module.exports.changePassword=async(req,res)=>{
    console.log('reached changed password',req.body)

    const phone = req.body.phone;
    
    const Otp= req.body.OTP;
    const Pwd=req.body.Pwd;

    // console.log(phone);

    const OTP = Number(Otp);
    const Phone = Number(phone);


    otpDB.findOneAndDelete({Phone, OTP})
    .then(async(saved)=>{

        // console.log(saved)
        if(saved){
            //set new password here
        
            await userDB.findOneAndUpdate({Phone:Phone}, {pwd: Pwd}, {returnDocument: 'after'})
            .then(saved=>{res.send(true)})
            .catch(error=>{res.send(false)})
        
        }
        else{ console.log('OTP not found');
            res.send(false);}
    })
    .catch( err =>{
        console.error(err)
        res.send(false)
    })


}

module.exports.adminAddBlogs=async(req,res) =>{

    console.log(req.body);

    const {blogTitle, blogText, blogTime} = req.body;

    const img = req.files;

    const imageURL = {url: '', fileName: ''}
    

    let newBlog = new blogsDB({blogTitle, blogText, blogTime, imageURL});

    newBlog.save()
        .then((saved)=>{
            console.log('blog added success');
            res.send(saved);
                
        })
        .catch(err =>{console.log(err);});

}

module.exports.getAllBlogs =async (req, res) =>{

    try{
        let blogs= await blogsDB.find({})
        // console.log(blogs)
    
        res.send(blogs);
    }
    catch(err){console.log(err)}

}


module.exports.getBlogData=async(req,res)=>{
    try{
        const _id = req.query.id;

        let blogdata = await blogsDB.findOne({_id});
        
        res.send(blogdata);
    }
    catch(err){console.log(err)}
}

module.exports.adminDeleteBlog=async(req,res)=>{

    console.log(req.body.blogToDelete, 'here')
    const _id = req.body.blogToDelete;
    
    blogsDB.findOneAndDelete({_id})
    .then((saved)=>{
        if(saved){
            res.send(saved);
        }
        else res.send(false);
    })
    .catch( err =>{
        console.error(err)
        res.send(false)
    })
}
