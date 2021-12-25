import jwt from '../lib/token.js';
import user from '../models/User.js';

const sendVerificationEmail = (req, res, next) => {
    const emailToken = {
        emailVerificationToken: jwt.createToken('email validation', '2 years')
    };
    user.setValidationToken(req.body.email, emailToken);

    //send email
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to: req.body.email,
        from: 'thomas.hofmann@digitalcareerinstitute.org', // Use the email address or domain you verified above
        subject: 'SUBJECT',
        text: `Verifiy registration: http://this.domain.td/emailVerify/${req.body.email}/${emailToken}`,
        html: `<strong>Verifiy registration: </strong><a href='http://this.domain.td/emailVerify/${req.body.email}/${emailToken}' target='_blank'>http://this.domain.td/emailVerify/${req.body.email}/${emailToken}</a>`,
    };

    //ES6
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
}

const verifyEmail = async(req, res) => {
    const foundUser = await user.findByEmail(req.params.userEmail)
    if(foundUser.emailVerificationToken === req.params.emailVerificationToken) {
        user.setValidationToken(req.params.userEmail, { emailVerificationToken: '' });
    }
    res.status(201).send();
};

export default {
    sendVerificationEmail,
    verifyEmail
}