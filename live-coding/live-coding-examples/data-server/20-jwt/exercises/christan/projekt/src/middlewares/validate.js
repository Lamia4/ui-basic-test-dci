import fs from 'fs';
import Ajv from "ajv";
import ajvFormats from 'ajv-formats';
import ajvErrors from "ajv-errors";
import userSchema from "../validation/users.post.js";

const ajv = new Ajv({ allErrors: true, coerceTypes: true, allowUnionTypes: true });
ajvFormats(ajv);
ajvErrors(ajv);

const validation = (req, res, next)=>{
    const test = ajv.compile(userSchema);
    // const result = test(usersDB);
    const result = test(req.body);
    
    if(!result) return res.status(400).json(test.errors);

    console.log(result, test.errors);
    next();
};


const usersDB = [
  {
    "id": "1032399646",
    "name": "Pepito Perez",
    "email": "accesocarnalviolento@gmail.com",
    "state": "Patagonia",
    "country": "Argentina"
  }
];

export default validation;