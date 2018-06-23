const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // 
    user: 'mehathab.portfolio@gmail.com', //you@service.com
    pass: 'Tigerclaw'
  }
});

const mailOptions = {
  from: `mehathab.portfolio@gmail.com`,
  to: `mehathab4eva@gmail.com`, 
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