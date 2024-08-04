//npm init
//npm i express dotenv hbs mongo mongoose nodemon body-parser express-session connect-mongodb-session


require("dotenv").config();

const path = require('path');
const express = require('express');
const app= express();
const PORT = process.env.PORT || 4700;
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');
const bodyparser = require('body-parser');//use with axios 
const cors = require('cors');
const cookieParser = require('cookie-parser');


// const nodemailer = require('nodemailer');
// const Mailgen = require('mailgen');

app.use(cors( 
    {
        // origin: process.env.FRONTEND_URL, 
        // origin: 'https://covendx.com', 
        origin: "http://localhost:3000", 
        // origin: '*',
       credentials: true, 
      withCredentials: true
    }
))

app.use((req, res, next)=>{
    res.setHeader(
        "Access-Control-Allow-Origin",
        // "https://covendx.com"
        "http://localhost:3000"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );
    next();
})

const mongoose = require('mongoose');
// const { mongoConnect } = require('./database/database.js');



const session = require('express-session')
const MongoDBsession = require('connect-mongodb-session')(session);//use with session

const store = new MongoDBsession({
    uri: process.env.MONGODB_URL,
    collection: "mysessions"
});

app.use(cookieParser())

app.use(
    session({
        secret:'secret key for cookie',
        resave: false,
        saveUninitialized: false,
        store: store,
        cookie:{secure:false}
    })
);




app.set('view engine','hbs');


app.use(express.urlencoded({ extended: true }));
//app.use(bodyparser.json()); 
 app.use(bodyparser.json({limit: "50mb"}));
 app.use(bodyparser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'photos')));



// const nodemailer = require('nodemailer');
// const Mailgen = require('mailgen');

// const EMAIL = 'jordanrhodes@gmail.com'; 
// const PASSWORD = 'ixep ljzv drjh lxih'; 



const AuthRouter = require('./routes/authentication.js');
app.use('/', AuthRouter);


// app.post('/sendmail',async (req,res)=>{

//     console.log(req.body.postdata);
//     const userEmail = req.body.postdata.email;

//     // let config = {
       
//     // }

//     let transporter = nodemailer.createTransport({
//         service : 'gmail',
//         auth : {
//             user: 'jordanrhodes127@gmail.com',
//             pass: 'gcdfqpiswmflrlgy'
//         }
//     });

    

//     let mailContent = {
//         from : 'jordanrhodes127@gmail.com',
//         to : userEmail,
//         subject: "Place Order",
//         text: 'hellllo'
//     }



//     transporter.sendMail(mailContent,function(err,val){
//         if(err){
//             console.log(err)
//         }else{console.log(val.response,'mail sent success')}

//     })
    
    
    
//     // .then(() => {
//     //     // return res.status(201).json({
//     //     //     msg: "you should receive an email"
//     //     // })
//     //     console.log('email sent successfully')
        
//     // }).catch(error => {
//     //     // return res.status(500).json({ error })
//     //     console.log(error,'error sending email')
//     // })

//     // res.status(201).json("getBill Successfully...!");

// })











    






//////USE BELOW CODE WITH MONGOOSE  
//////

mongoose.connect(process.env.MONGODB_URL ,{
//    useNewUrlParser: true,
//    useUnifiedTopology: true,
   // useCreateIndex: true
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        })
    })
    .catch(err => {console.error(err);});

