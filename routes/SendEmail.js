const express = require('express');
const app = express();
let SD_USER = require('../model/User');

const SD_EMAIL = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '2dSchemtaics@gmail.com',
    pass: '2dscheme01'
  }
});


SD_EMAIL.route('/email/send-password').post((req, res, next) => {
  SD_USER.updateOne({ emailAddress: req.body.email}, 
    { $set:
        {
            
            password: "AeiOu98094_#234"
        }
     },  (err, user)=>{
    if (err) {
      console.log("1");

      return next(err);
    }else{
      var mailOptions = {
        from: '2dSchemtaics@gmail.com',
        to: req.body.email,
        subject: 'Reset Email',
        text: 'Your password has been reset. New password is AeiOu98094_#234'
      };
      transporter.sendMail(mailOptions, (error, data) => {
        if (error) {
          console.log("2");

          res.next(error);
        } else {
          console.log("3");
           mailOptions.to=res.body.email;
          res.json(data);
        }
      });

    }
});
res.send("Email sent");
});



module.exports = SD_EMAIL;