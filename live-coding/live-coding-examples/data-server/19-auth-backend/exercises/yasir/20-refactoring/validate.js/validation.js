import Ajv from "ajv";
import ajvErrors from "ajv-errors";
// Wir erstellen ein neues Objekt des Ajv JSON Validators
const ajv = new Ajv({
  allErrors: true,
  coerceTypes: true,
  allowUnionTypes: true,
});
ajvErrors(ajv);

const schema = {
  type: "object",
  additionalProperties: true,
  required: ["name", "password", "email"],
  properties: {
    name: {
      type: "string",
      minLength: 3,
      maxLength: 3,
    },
    password: {
      type: "string",
    },
    email: {
      type: "string",
    },
  },
};

const test = ajv.compile(schema);
const result = test(airports);