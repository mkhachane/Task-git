var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '', // creds of email
    pass: ''
  }
});

var mailOptions = {
  from: '',
  to: '', 
  subject: 'Sending Email using Node.js',
  // text: 'That was easy!'              
  html: '<h1>Hi,</h1><p>How are you?</p>'  // You can send html as well as text
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email Successfully Sent: ' + info.response);
  }
});
