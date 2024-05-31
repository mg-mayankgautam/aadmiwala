const companyDB = require("../models/companyDB.js");
const otpDB=require("../models/otpDB.js")
const userDB=require("../models/usersDB.js")

var axios = require('axios');
require('dotenv').config();
// const ratingDB = require("../models/ratingsDB.js");

const accountSid=process.env.TWILIO_ACCOUNT_SID;
const authToken=process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')('ACf7dcdf5392bef8bfc0b9e42b9a11cb1c','975b7584a795956a40808329e7662f33');



module.exports.verifyOtp=async(req, res)=>{
    const phone = req.body.phone;
    const Otp= req.body.OTP;

    const OTP = Number(Otp);
    const Phone = Number(phone);


    otpDB.findOneAndDelete({Phone, OTP})
    .then((saved)=>{

        console.log(saved)
        if(saved){res.send(true);}
        else res.send(true);//change this to false
       // 
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

    const sendSMS= async(body)=>{

        let msgOptions = {
            from: '+13642047179',
            to: phone,
            body,
        };
        try{
            

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


           


            res.send(true);
        }catch(e){console.log(e);}
    }

    // var config = {
    //     method: 'get',
    //   maxBodyLength: Infinity,
    //     url: `https://2factor.in/API/V1/9dfd8b94-1f26-11ef-8b60-0200cd936042/SMS/+919810533987/1234/OTP1`,
    //     headers: { }
    //   };

    //   axios(config)
    //     .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //     })
    //     .catch(function (error) {
    //     console.log(error);
    //     });



    //Twilio
   // sendSMS(`hello from admiwala your OTP is${OTP}`);
   
res.send(true);

}


module.exports.addRecruitingCompany= async (req,res)=>{

    console.log('working backend wuhu');

    const {fullName, email, phone, companyName, serviceType, agencyBriefing, country, address, city, image1, image2, image3, image4, pwd} = req.body;

    const imageURLs = [
        {url: image1}, 
        {url: image2}, 
        {url: image3}, 
        {url: image4}
    ]


    // const noOfpositions= Number(noOfPositions);
    const noOfpositions= Number(0);
    const Phone = Number(phone);

    console.log(req.body);
    console.log(noOfpositions, Phone);

    let newCompany = new companyDB({fullName, email, Phone, companyName, serviceType, agencyBriefing, noOfpositions, country, address, city, imageURLs});

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
            
        })
        .catch(err =>{console.log(err);});


    // res.send(true);

}


module.exports.getCompanies =async (req, res) =>{

    let company= await companyDB.find({})
   
    res.send(company);

}


module.exports.checkUsername =async(req,res)=>{

    // const Username = req.body.Username;
    //     console.log('usgernamer',Username);
    // const user = await usersDB.findOne({Username},{Username:1});
    // console.log(user);
    // res.send({user});
}


module.exports.signUp = async (req,res)=>{

    // console.log('working backend wuhu')

    // const {Username,Password}=req.body; 
    console.log(req.body);

    // let newUser = new usersDB ({Username,Password});
    // newUser.save()
    //  .then((saved)=>{
    //                    const UserID = saved._id.toString();
    //                    const Username = saved.Username;
    //                    const watchedmovie=[];
    //                    const WatchList=[]; 
    //                    const Lists=[];
    //                  let rating = new ratingDB ({UserID,Username,watchedmovie,WatchList, Lists});
    //                  rating.save()
    //                   .then(()=>{


    //                  console.log('rating added success');
    //                 res.send(true);
    //                  })
    //                    .catch(err =>{console.log(err);});
        
    //             console.log('user addes success');
    //     // res.redirect('/');
    //   })
    //    .catch(err =>{console.log(err);});



}




module.exports.logIn = async (req,res)=>{

    const {Username,Password}=req.body; 
    // console.log(req.body);

    let user = await usersDB.findOne({Username,Password});
   
   //console.log(user);

    
    if(user){
        
        req.session.Username=Username;
        req.session.UserID=user._id.toString();
        res.json({Username:req.session.Username})}
    else if(!user){res.json(false)}
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
// console.log('isauth controller');
    if(!req.session.Username){
     

       
    


    
    res.send({auth:false})}


        else if(req.session.Username){

          
         
         
           
             res.send({auth:req.session.Username})}



}


module.exports.getCompanydata=async(req,res)=>{
   // console.log('here',req.query.id);
    const _id = req.query.id;
    let companydata = await companyDB.findOne({_id});
   
    console.log(companydata);
   res.send(companydata);
}

