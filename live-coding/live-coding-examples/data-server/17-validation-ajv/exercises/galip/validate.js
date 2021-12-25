import Ajv from 'ajv';



const ajv = new Ajv({ allErrors: true, coerceTypes: true, allowUnionTypes: true });



import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const colors = require("../colors.json") // use the require method



const schema = {

    type: "array",
    items: {
        type: "object",
        properties: {
            id: {
                type: "number"
            },

            title: {
                type: "string",

            },

            userName: {
                type: "string"

            },

            hsv: {
                type: "object",
                properties: {
                    hue: {
                        type: "string"
                    }
                }
            }
        }
    }

}



const test = ajv.compile(schema);

const result = test(colors)


console.log(result);


