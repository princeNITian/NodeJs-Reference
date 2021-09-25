// var nodemailer = require('nodemailer');

// var transporter = new nodemailer.createTransport({
//     // service: 'gmail',
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//         user: 'princeraj427@gmail.com',
//         password: 'Prince@2019'
//     }
// });

// var mailOptions = {
//     from: 'princeraj427@gmail.com',
//     to: 'b170088@nitsikkim.ac.in',
//     subject: 'Test Mail NodeJs',
//     text: 'This is a test mail!'
// };

// // var mailOptions = {
// //     from: 'youremail@gmail.com',
// //     to: 'myfriend@yahoo.com',
// //     subject: 'Sending Email using Node.js',
// //     html: '<h1>Welcome</h1><p>That was easy!</p>'
// //   }

// transporter.sendMail(mailOptions,function(err,info){
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Email sent: ',info.response);
//     }
// });



"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'princeraj427@gmail.com', // generated ethereal user
      pass: 'Prince@XXXX', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Test 👻" <princeraj427@gmail.com> ', // sender address
    to: "princeraj427@gmail.com, b170088@nitsikkim.ac.in", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
