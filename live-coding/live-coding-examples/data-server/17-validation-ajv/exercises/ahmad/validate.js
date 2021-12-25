import Ajv from "ajv";
import ajvErrors from "ajv-errors";

const ajv = new Ajv({ allErrors: true, coerceTypes: true, allowUnionTypes: true });

ajvErrors(ajv);


const colors = [
    {
        "id": 10129964,
        "title": "The Wet Look",
        "userName": "Bubbletripper",
        "numViews": 1,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 14:48:53",
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
    },
    {
        "id": 10129963,
        "title": "Navel Maneuver",
        "userName": "Bubbletripper",
        "numViews": 3,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 14:48:50",
        "hex": "609AC0",
        "rgb": {
            "red": 96,
            "green": 154,
            "blue": 192
        },
        "hsv": {
            "hue": 204,
            "saturation": 50,
            "value": 75
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/609AC0/Navel_Maneuver",
        "imageUrl": "http://www.colourlovers.com/img/609AC0/100/100/Navel_Maneuver.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129963_Navel_Maneuver.png",
        "apiUrl": "http://www.colourlovers.com/api/color/609AC0"
    },
];

const schema = {
    type: "array",

    items:{
        type: "object",

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

            hsv: {

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
 

    } 
}
};

const test = ajv.compile(schema);
const result = test(colors);
console.log(result, test.errors);