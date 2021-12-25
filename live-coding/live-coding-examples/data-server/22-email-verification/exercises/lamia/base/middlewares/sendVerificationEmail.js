import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

dotenv.config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendVerificationEmail = (req, res, next) => {

    const msg = {
        to: req.body.email,
        from: 'thomas.hofmann@digitalcareerinstitute.org', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      //ES6
      sgMail
        .send(msg)
        .then(() => {}, error => {
          console.error(error);
      
          if (error.response) {
            console.error(error.response.body)
          }
        });
};

export default sendVerificationEmail