import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'thomas.hofmann@digitalcareerinstitute.org',
  from: 'thomas.hofmann@digitalcareerinstitute.org', // Use the email address or domain you verified above
  subject: 'SUBJECT',
  text: 'NACHRICHT',
  html: '<strong>NACHRICHT ALS HTML</strong>',
};

const ES6=true;
if (ES6) {
  sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);
    
    if (error.response) {
      console.error(error.response.body)
    }
  });
} else { //ES8
  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);
      
      if (error.response) {
        console.error(error.response.body)
      }
    }
  })();
}
