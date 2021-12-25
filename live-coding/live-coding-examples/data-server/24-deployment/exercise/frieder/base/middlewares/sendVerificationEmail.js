import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import sha256 from 'sha256';

dotenv.config();

const API_KEY = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(API_KEY);

const sendVerificationEmail = (req, res, next) => {
	const verificationToken = sha256(Math.random().toString());

	let verificationURL = "http://localhost:3345/emailVerify/" + req.body.email + verificationToken;
	const msg = {
		to: req.body.email,
		from: 'thomas.hofmann@digitalcareerinstitute.org', // must be the verified email-adress @sendgrid
		subject: 'Verification E-Mail',
		text: verificationURL,
		html: `<a href="${verificationURL}">click to verify your email address</a>`,
	  };

	sgMail.send(msg)
    .then(() => {}, error => {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }
    });


	//res.status(200).send({verification-});
};

export default sendVerificationEmail;
