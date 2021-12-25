import Ajv from "ajv";
import ajvErrors from "ajv-errors";
import addFormats from "ajv-formats";

import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const colors = require("../colors.json") // use the require method

const ajv = new Ajv({ allErrors: true, coerceTypes: true, allowUnionTypes: true, });

ajvErrors(ajv);
addFormats(ajv);

ajv.addFormat("hex", "[A-Fa-f0-9]{6}$");

const schema = {
  type: "array",
  items: {
    type: "object",
    additionalProperties: true,
    properties: {
      id: {
        type: "number",
      },
      title: {
        type: "string",
      },
      userName: {
        type: "string",
      },
      dateCreated: {
        type: "string",
        format: "date-time",
      },
      hex: {
        type: "string",
        format: "hex",
      },
      rgb: {
        type: "object",
      },
      hsv: {
        type: "object",
        properties: {
          hue: {
            type: "number",
          },
          saturation: {
            type: "number",
          },
          value: {
            type: "number",
          },
        },
      },
      apiUrl : {
        type: "string",
        format: "uri"
      }
    },
  },
};

const test = ajv.compile(schema);

const result = test(colors);

console.log("result:", result,  test.errors);
