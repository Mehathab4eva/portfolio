const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // type: 'oauth2',
    user: 'YOUR_EMAIL', //you@service.com
    pass: 'YOUR_PASSWORD'
  }
});

const mailOptions = {
  from: `YOUR_EMAIL`,
  to: `SENDER_EMAIL`, 
  subject: `Rec_portfolio: `,
  text: 'test failed' // default text
};


function sendMail(){

 transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
    
  } else {
    console.log('Email sent: ' + info.response);
  
  }
});
 
}

function defaultValues() {
  mailOptions.subject =  `Rec_portfolio: `;
  mailOptions.text  = `test failed`;

}


module.exports = {
  mailOptions,
  sendMail,
  defaultValues,
  
}