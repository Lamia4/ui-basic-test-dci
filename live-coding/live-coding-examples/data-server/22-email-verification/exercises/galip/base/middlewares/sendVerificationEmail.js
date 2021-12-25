
import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

dotenv.config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const sendVerificationEmail = (req, res, next) => {

    const msg = {
        to: 'galipsvt16@gmail.com',
        from: 'allesklarnicht16@gmail.com', // Use the email address or domain you verified above
        subject: 'Where is Yasir?',
        text: 'first of all, i would like to say nothing',
        html: '<strong>2.deneme</strong>',
    };
    //ES6
    sgMail
        .send(msg)
        .then(() => { }, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });
    //ES8
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
};

export default sendVerificationEmail;
