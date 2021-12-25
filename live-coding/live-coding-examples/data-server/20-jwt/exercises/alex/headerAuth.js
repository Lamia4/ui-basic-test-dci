// Middleware authentication on every access !!!
// https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
//
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express();

const userSchema = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    token: ""
  };
// ========================================================
// ** Register User
//
// -> Get user input.
// -> Validate user input.
// -> Validate if the user already exists.
// -> Encrypt the user password.
// -> Create a user in our database.
// -> And finally, create a signed JWT token.
//
app.post("/register", (req, res) => {

    try {
        // Get user input
        const { first_name, last_name, email, password } = req.body;

        // Validate user input
        if (!(email && password && first_name && last_name)) {
          res.status(400).send("All input is required");
        }

        // check if user already exist
        // Validate if user exist in our database
        // const oldUser = await User.findOne({ email });
        /*
        if (oldUser) {
          return res.status(409).send("User Already Exist. Please Login");
        }
        */

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await User.create({
          first_name,
          last_name,
          email: email.toLowerCase(), // sanitize: convert email to lowercase
          password: encryptedPassword,
        });

        // Create token
        const token = jwt.sign(
          { user_id: user._id, email },
          process.env.TOKEN_KEY,            // Secret
          {
            algorithm: "HS256",             // Options
            expiresIn: "2h",
          }
        );
        // save user token
        user.token = token;

        // return new user
        res.status(201).json(user);
      } catch (err) {
        console.log(err);
      }
});
// -------------------------------------------------------
// ** Login User
//
// -> Get user input.
// -> Validate user input.
// -> Validate if the user exists.
// -> Verify user password against the password we saved earlier in our database.
// -> And finally, create a signed JWT token.
//
app.post("/login", (req, res) => {
    // our login logic goes here
    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
          res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        // const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
          // Create token
          const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,              // Secret
            {
                algorithm: "HS256",             // Options
                expiresIn: "2h",
            }
          );

          // save user token
          user.token = token;

          // user
          res.status(200).json(user);
        }
        res.status(400).send("Invalid Credentials");
      } catch (err) {
        console.log(err);
      }
});
// -------------------------------------------------------
// ** Middleware: Authenticate User (Token) on every access
//
const config = process.env;

const verifyToken = (req, res, next) => {

    const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
