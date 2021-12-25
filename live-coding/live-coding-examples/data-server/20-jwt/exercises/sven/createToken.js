import jwt from 'jsonwebtoken';
//import dotenv from 'dotenv';
import user from '../models/User.js';

    const payload = user;
    console.log(user);
    
    //const secret = process.env.SECRET;
    const secret = "jddohfidhvkjdbfjhfioufoiehfjebfjheoize";
    
    const options = {
        algorithm: "HS256",
        expiresIn: "300s",
    };
    
    const token = jwt.sign(payload, secret, options);
    
    console.log({token});

    //________________________________

    jwt.verify(token, secret, { algorithms: ["HS256"] }, (error, decoded) => {
        if(error) return console.log({error});

        console.log(decoded);
    });
    

   


