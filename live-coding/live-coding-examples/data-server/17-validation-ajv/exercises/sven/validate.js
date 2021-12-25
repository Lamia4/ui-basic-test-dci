import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import ajvFormats from 'ajv-formats';

const ajv = new Ajv ({ allErrors: true, coerceTypes: true, allowUnionTypes: true });
ajvErrors(ajv);
ajvFormats(ajv);

const colors = [{
    "id": 10129964,
    "title": "The Wet Look",
    "userName": "Bubbletripper",
    "numViews": 1,
    "numVotes": 0,
    "numComments": 0,
    "numHearts": 0,
    "rank": 0,
    "dateCreated": "2021-08-31 14:48:53",
    "hex": "197BA0",
    "rgb": {
        "red": 25,
        "green": 123,
        "blue": 160
    },
    "hsv": {
        "hue": 196,
        "saturation": 84,
        "value": 63
    },
    "description": "",
    "url": "http://www.colourlovers.com/color/197BA0/The_Wet_Look",
    "imageUrl": "http://www.colourlovers.com/img/197BA0/100/100/The_Wet_Look.png",
    "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129964_The_Wet_Look.png",
    "apiUrl": "http://www.colourlovers.com/api/color/197BA0"
}];

const schema = {
    type: "array",
    items: {
        type: "object",
        properties: {
            id: {
                type: "number",
                minimum: 10000000,
                maximum: 99999999,
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
                format: "date-time",
            },
            hex: {
                type: "string",
                minLength: 6,
                maxLength: 6,
            },
            rgb:{
                type: "object", 
                properties: {
                    red: {
                        type: "number",
                        minimum: 0,
                        maximum: 255,
                    },
                    green: {
                        type: "number",
                        minimum: 0,
                        maximum: 255,
                    },
                    blue: {
                        type: "number",
                        minimum: 0,
                        maximum: 255,
                    },
                },
            },
            hsv:{
                type: "object", 
                additionalProperties: true,
                properties: {
                    hue: {
                        type: "number",
                    },
                    saturation: {
                        type: "number",
                    },
                    blue: {
                        type: "number",
                    },
                },
            },
            description: {
                type: "string",
            },
            url: {
                type: "string",
                format: "url",
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
        }
    }
};

const test = ajv.compile(schema);

const result = test(colors);

console.log(result, test.errors);