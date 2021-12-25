const Ajv = require("ajv");
const ajvErrors = require("ajv-errors");
const colors = require("../colors.json");

const ajv = new Ajv({
  allErrors: true,
  coerceTypes: true,
  allowUnionTypes: true,
});
ajvErrors(ajv);

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
      numViews: {
        type: "number",
      },
      numVotes: {
        type: "number",
      },
      numComments: {
        type: "number",
      },
      numHearts: {
        type: "number",
      },
      rank: {
        type: "number",
      },
      dateCreated: {
        type: "string",
      },
      hex: {
        type: "string",
      },
      rgb: {
        type: "object",
        properties: {
          red: {
            type: "number",
          },
          green: {
            type: "number",
          },
          blue: {
            type: "number",
          },
        },
      },
      hsv: {
        type: "object",
      },
      description: {
        type: "string",
      },
      url: {
        type: "string",
      },
      imageUrl: {
        type: "string",
      },
      badgeUrl: {
        type: "string",
      },
      apiUrl: {
        type: "string",
      },
    },
  },
};
const test = ajv.compile(schema);
const result = test(colors);

console.log(result, test.errors);
