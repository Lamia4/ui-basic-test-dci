import Ajv from "ajv";
import ajvErrors from "ajv-errors";
import ajvFormats from "ajv-formats";

import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const my_json_file = require("../colors.json") // use the require method

const ajv = new Ajv({allErrors:true, coerceTypes:true, allowUnionTypes:true, });


ajvErrors(ajv);
ajvFormats(ajv);


const schema ={
    type:"array",
    items:{
        type:"object",
        additionalProperties: true,
        properties:{
            id:{
                type:"number",
            },
            title:{
                type:"string",
            },
            userName:{
                type:"string",
            },
            numViews:{
                type:"number"
            },
            numVotes:{
                type:"number"
            },
            numComments:{
                type:"number"
            },
            numHearts:{
                type:"number"
            },
            rank:{
                type:"number"
            },
            dateCreated:{
                type:"string",
                format:"date-time",
            },
            hex:{
                type:"string",
                pattern: "^[0-9a-fA-F]{6}$"
            },
            rgb:{
                type:"object",
                properties:{
                    red:{
                        type:"integer",
                        minimum:0,
                        maximum:255,

                    },
                    green:{
                        type:"integer",
                        minimum:0,
                        maximum:255,

                    },
                    blue:{
                        type:"integer",
                        minimum:0,
                        maximum:255,

                    },
                }
            },
            hsv:{
                type:"object",
                properties:{
                    hue:{
                        type:"number", 
                    },
                    saturation:{
                        type:"number", 
                    },
                    value:{
                        type:"number",
                    },
                }
            },
            description:{
                type:"string",
                
            },
            url:{
                type:"string",
                
                
            },
            imageUrl:{
                type:"string",
                
            },
            badgeUrl:{
                type:"string",
                format:"uri",
            },
            apiUrl:{
                type:"string",
                format:"uri",
            }

        }
    }
}
const test = ajv.compile(schema);
const result = test(my_json_file);

console.log(result, test.errors);