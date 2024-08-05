const nodemailer = require('nodemailer');


module.exports.shareRequirements = async(req, res)=>{

    console.log(req.body.postdata);
    const name = req.body.postdata.name;
    const phone = req.body.postdata.phone;
    const email = req.body.postdata.email;
    const location = req.body.postdata.location;
    const requirements = req.body.postdata.requirements;


    let transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user: 'noreply.covendx@gmail.com',
            pass: 'ivukyxozcrduxwau'
        }
    });

    

    let mailContent = {
        from : 'noreply.covendx@gmail.com',
        to : 'mayankgautam0811@gmail.com',
        subject: `New Requirement from ${name}`,
        text: `You got a new message from ${name}:

            Their Details
            Name: ${name}
            Phone: ${phone}
            Email: ${email}
            Location: ${location}
            Requirements: ${requirements}`
    }



    transporter.sendMail(mailContent,function(err,val){
        if(err){
            console.log(err)
        }else{console.log(val.response,'mail sent success')}

    })
    

}


module.exports.getInTouch = async(req, res)=>{

    console.log(req.body.postdata);
    const name = req.body.postdata.name;
    const phone = req.body.postdata.phone;
    const email = req.body.postdata.email;
    const postedby = req.body.postdata.postedby;
    const companyname = req.body.postdata.companyname;


    let transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user: 'noreply.aadmiwala@gmail.com',
            pass: 'ulgpwlxtzonjsbvs'
        }
    });

    

    let mailContent = {
        from : 'noreply.aadmiwala@gmail.com',
        to : 'mayankgautam0811@gmail.com',
        subject: `New Service Interest from ${name}`,

        text: `An applier is interested in the following service:

            Applier Details:
            Name: ${name}
            Phone: ${phone}
            Email: ${email}

            Company Details:
            Company Name: ${companyname}
            HR's Name: ${postedby}`
    }



    transporter.sendMail(mailContent,function(err,val){
        if(err){
            console.log(err)
        }else{console.log(val.response,'mail sent success')}

    })
    

}