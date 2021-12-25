import fs from 'fs';
import Ajv from 'ajv';
import ajvFormats from 'ajv-formats';

const ajv = new Ajv();
ajvFormats(ajv);

let buffer;

try {
    buffer = fs.readFileSync('../colors.json', 'utf8');
} catch (e) {
    console.error(e);
}
const colorsJson = JSON.parse(buffer);
const colorsJsonUriEncoded = colorsJson.map( item => {
    item.url = encodeURI(item.url);
    item.imageUrl = encodeURI(item.imageUrl);
    item.badgeUrl = encodeURI(item.badgeUrl);
    item.apiUrl = encodeURI(item.apiUrl);
    return item;
});

const colorsSchema = { 
    $id: 'color',
    type: 'number',
    minimum: 0,
    maximum: 255,
};

const uriSchema = { 
    $id: 'uri',
    type: 'string',
    format: 'uri'
};

const schema = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            id: { type: 'number' },
            title:{ type: 'string' },
            userName: {
                type: 'string',
                pattern: '[a-zA-Z0-9]+'
            },
            numViews: { type: 'number' },
            numVotes: { type: 'number' },
            numComments: { type: 'number' },
            numHearts: { type: 'number' },
            rank: { type: 'number' },
            dateCreated: { 
                type: 'string',
                format: 'date-time'
            },
            hex: { 
                type: 'string',
                pattern: '^[0-9a-fA-F]{6}$'
            },
            rgb: {
                type: 'object',
                required: [ 'red', 'green', 'blue' ],
                properties:{
                    red: { $ref: 'color' },
                    green: { $ref: 'color' },
                    blue: { $ref: 'color' }
                }
            },
            hsv: {
                type: 'object',
                required: [ 'hue', 'saturation', 'value' ],
                properties: {

                    hue: { 
                        type: 'number',
                        minimum: 0,
                        maximum: 359,
                    },
                    saturation: {
                        type: 'number',
                        minimum: 0,
                        maximum: 100,
                    },
                    value: {
                        type: 'number',
                        minimum: 0,
                        maximum: 100,
                    }
                }
            },
            description: { type: 'string' },
            url: { $ref: 'uri' },
            imageUrl: { $ref: 'uri' },
            badgeUrl: { $ref: 'uri' },
            apiUrl: { $ref: 'uri' }
        }
    }
}

const test = ajv.addSchema(colorsSchema).addSchema(uriSchema).compile(schema);
const result = test(colorsJsonUriEncoded);
console.log(result, test.errors);