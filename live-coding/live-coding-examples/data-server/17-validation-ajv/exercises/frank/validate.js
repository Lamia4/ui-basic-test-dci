import Ajv from "ajv";
import ajvErrors from "ajv-errors";
import ajvFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true, coerceTypes: true, allowUnionTypes: true });

ajv.addFormat("myByte", {
    type: "number",
    validate: (x) => x >= 0 && x <= 255 && x % 1 == 0
  });

ajvErrors(ajv);
ajvFormats(ajv);

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
    {
        "id": 10129962,
        "title": "Ciklame",
        "userName": "gybarbara2015",
        "numViews": 1,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 14:47:12",
        "hex": "CD2DE4",
        "rgb": {
            "red": 205,
            "green": 45,
            "blue": 228
        },
        "hsv": {
            "hue": 292,
            "saturation": 80,
            "value": 89
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/CD2DE4/Ciklame",
        "imageUrl": "http://www.colourlovers.com/img/CD2DE4/100/100/Ciklame.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129962_Ciklame.png",
        "apiUrl": "http://www.colourlovers.com/api/color/CD2DE4"
    },
    {
        "id": 10129961,
        "title": "Abdelqader",
        "userName": "Bubbletripper",
        "numViews": 1,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 14:37:53",
        "hex": "3C89B7",
        "rgb": {
            "red": 60,
            "green": 137,
            "blue": 183
        },
        "hsv": {
            "hue": 202,
            "saturation": 67,
            "value": 72
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/3C89B7/Abdelqader",
        "imageUrl": "http://www.colourlovers.com/img/3C89B7/100/100/Abdelqader.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129961_Abdelqader.png",
        "apiUrl": "http://www.colourlovers.com/api/color/3C89B7"
    },
    {
        "id": 10129960,
        "title": "wouldn't B surprised",
        "userName": "rollzone",
        "numViews": 1,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 14:20:08",
        "hex": "FAC823",
        "rgb": {
            "red": 250,
            "green": 200,
            "blue": 35
        },
        "hsv": {
            "hue": 46,
            "saturation": 86,
            "value": 98
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/FAC823/wouldnt_B_surprised",
        "imageUrl": "http://www.colourlovers.com/img/FAC823/100/100/wouldnt_B_surprised.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129960_wouldnt_B_surprised.png",
        "apiUrl": "http://www.colourlovers.com/api/color/FAC823"
    },
    {
        "id": 10129959,
        "title": "esfsxff",
        "userName": "rosalarose",
        "numViews": 6,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 13:31:25",
        "hex": "DC46C1",
        "rgb": {
            "red": 220,
            "green": 70,
            "blue": 193
        },
        "hsv": {
            "hue": 311,
            "saturation": 68,
            "value": 86
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/DC46C1/esfsxff",
        "imageUrl": "http://www.colourlovers.com/img/DC46C1/100/100/esfsxff.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129959_esfsxff.png",
        "apiUrl": "http://www.colourlovers.com/api/color/DC46C1"
    },
    {
        "id": 10129958,
        "title": "ihyopp",
        "userName": "rosalarose",
        "numViews": 5,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 13:31:23",
        "hex": "84A99D",
        "rgb": {
            "red": 132,
            "green": 169,
            "blue": 157
        },
        "hsv": {
            "hue": 161,
            "saturation": 22,
            "value": 66
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/84A99D/ihyopp",
        "imageUrl": "http://www.colourlovers.com/img/84A99D/100/100/ihyopp.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129958_ihyopp.png",
        "apiUrl": "http://www.colourlovers.com/api/color/84A99D"
    },
    {
        "id": 10129957,
        "title": "Brick wall",
        "userName": "syork",
        "numViews": 12,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 13:13:37",
        "hex": "AE2820",
        "rgb": {
            "red": 174,
            "green": 40,
            "blue": 32
        },
        "hsv": {
            "hue": 3,
            "saturation": 82,
            "value": 68
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/AE2820/Brick_wall",
        "imageUrl": "http://www.colourlovers.com/img/AE2820/100/100/Brick_wall.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129957_Brick_wall.png",
        "apiUrl": "http://www.colourlovers.com/api/color/AE2820"
    },
    {
        "id": 10129956,
        "title": "Nearly olive",
        "userName": "Gardening Seamstress",
        "numViews": 8,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 12:53:47",
        "hex": "55520E",
        "rgb": {
            "red": 85,
            "green": 82,
            "blue": 14
        },
        "hsv": {
            "hue": 57,
            "saturation": 84,
            "value": 33
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/55520E/Nearly_olive",
        "imageUrl": "http://www.colourlovers.com/img/55520E/100/100/Nearly_olive.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129956_Nearly_olive.png",
        "apiUrl": "http://www.colourlovers.com/api/color/55520E"
    },
    {
        "id": 10129955,
        "title": "Happy green",
        "userName": "Dalienth",
        "numViews": 6,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 12:45:38",
        "hex": "6AC30F",
        "rgb": {
            "red": 106,
            "green": 195,
            "blue": 15
        },
        "hsv": {
            "hue": 90,
            "saturation": 92,
            "value": 76
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/6AC30F/Happy_green",
        "imageUrl": "http://www.colourlovers.com/img/6AC30F/100/100/Happy_green.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129955_Happy_green.png",
        "apiUrl": "http://www.colourlovers.com/api/color/6AC30F"
    },
    {
        "id": 10129954,
        "title": "Happy blue",
        "userName": "Dalienth",
        "numViews": 7,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 12:45:37",
        "hex": "018CE7",
        "rgb": {
            "red": 1,
            "green": 140,
            "blue": 231
        },
        "hsv": {
            "hue": 204,
            "saturation": 100,
            "value": 91
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/018CE7/Happy_blue",
        "imageUrl": "http://www.colourlovers.com/img/018CE7/100/100/Happy_blue.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129954_Happy_blue.png",
        "apiUrl": "http://www.colourlovers.com/api/color/018CE7"
    },
    {
        "id": 10129953,
        "title": "So Smooth",
        "userName": "Bubbletripper",
        "numViews": 5,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 12:16:22",
        "hex": "347EA5",
        "rgb": {
            "red": 52,
            "green": 126,
            "blue": 165
        },
        "hsv": {
            "hue": 201,
            "saturation": 68,
            "value": 65
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/347EA5/So_Smooth",
        "imageUrl": "http://www.colourlovers.com/img/347EA5/100/100/So_Smooth.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129953_So_Smooth.png",
        "apiUrl": "http://www.colourlovers.com/api/color/347EA5"
    },
    {
        "id": 10129952,
        "title": "Summer in Gstaad",
        "userName": "Bubbletripper",
        "numViews": 7,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 12:16:21",
        "hex": "5597B9",
        "rgb": {
            "red": 85,
            "green": 151,
            "blue": 185
        },
        "hsv": {
            "hue": 200,
            "saturation": 54,
            "value": 73
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/5597B9/Summer_in_Gstaad",
        "imageUrl": "http://www.colourlovers.com/img/5597B9/100/100/Summer_in_Gstaad.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129952_Summer_in_Gstaad.png",
        "apiUrl": "http://www.colourlovers.com/api/color/5597B9"
    },
    {
        "id": 10129951,
        "title": "The Greatest Gift",
        "userName": "Bubbletripper",
        "numViews": 4,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 12:15:08",
        "hex": "3390CB",
        "rgb": {
            "red": 51,
            "green": 144,
            "blue": 203
        },
        "hsv": {
            "hue": 203,
            "saturation": 75,
            "value": 80
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/3390CB/The_Greatest_Gift",
        "imageUrl": "http://www.colourlovers.com/img/3390CB/100/100/The_Greatest_Gift.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129951_The_Greatest_Gift.png",
        "apiUrl": "http://www.colourlovers.com/api/color/3390CB"
    },
    {
        "id": 10129950,
        "title": "П",
        "userName": "Mirasavchyn",
        "numViews": 5,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 12:13:05",
        "hex": "3FBDA6",
        "rgb": {
            "red": 63,
            "green": 189,
            "blue": 166
        },
        "hsv": {
            "hue": 169,
            "saturation": 67,
            "value": 74
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/3FBDA6/П",
        "imageUrl": "http://www.colourlovers.com/img/3FBDA6/100/100/П.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129950_.png",
        "apiUrl": "http://www.colourlovers.com/api/color/3FBDA6"
    },
    {
        "id": 10129949,
        "title": "П",
        "userName": "Mirasavchyn",
        "numViews": 3,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 12:12:29",
        "hex": "F417E5",
        "rgb": {
            "red": 244,
            "green": 23,
            "blue": 229
        },
        "hsv": {
            "hue": 304,
            "saturation": 91,
            "value": 96
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/F417E5/П",
        "imageUrl": "http://www.colourlovers.com/img/F417E5/100/100/П.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129949_.png",
        "apiUrl": "http://www.colourlovers.com/api/color/F417E5"
    },
    {
        "id": 10129948,
        "title": "П",
        "userName": "Mirasavchyn",
        "numViews": 6,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 12:12:27",
        "hex": "B845B0",
        "rgb": {
            "red": 184,
            "green": 69,
            "blue": 176
        },
        "hsv": {
            "hue": 304,
            "saturation": 63,
            "value": 72
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/B845B0/П",
        "imageUrl": "http://www.colourlovers.com/img/B845B0/100/100/П.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129948_.png",
        "apiUrl": "http://www.colourlovers.com/api/color/B845B0"
    },
    {
        "id": 10129947,
        "title": "П",
        "userName": "Mirasavchyn",
        "numViews": 0,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 12:11:32",
        "hex": "8EBB10",
        "rgb": {
            "red": 142,
            "green": 187,
            "blue": 16
        },
        "hsv": {
            "hue": 76,
            "saturation": 91,
            "value": 73
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/8EBB10/П",
        "imageUrl": "http://www.colourlovers.com/img/8EBB10/100/100/П.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129947_.png",
        "apiUrl": "http://www.colourlovers.com/api/color/8EBB10"
    },
    {
        "id": 10129946,
        "title": "П",
        "userName": "Mirasavchyn",
        "numViews": 0,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 12:11:31",
        "hex": "6C10BB",
        "rgb": {
            "red": 108,
            "green": 16,
            "blue": 187
        },
        "hsv": {
            "hue": 272,
            "saturation": 91,
            "value": 73
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/6C10BB/П",
        "imageUrl": "http://www.colourlovers.com/img/6C10BB/100/100/П.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129946_.png",
        "apiUrl": "http://www.colourlovers.com/api/color/6C10BB"
    },
    {
        "id": 10129945,
        "title": "П",
        "userName": "Mirasavchyn",
        "numViews": 0,
        "numVotes": 0,
        "numComments": 0,
        "numHearts": 0,
        "rank": 0,
        "dateCreated": "2021-08-08 12:10:31",
        "hex": "E7F510",
        "rgb": {
            "red": 231,
            "green": 245,
            "blue": 16
        },
        "hsv": {
            "hue": 64,
            "saturation": 93,
            "value": 96
        },
        "description": "",
        "url": "http://www.colourlovers.com/color/E7F510/П",
        "imageUrl": "http://www.colourlovers.com/img/E7F510/100/100/П.png",
        "badgeUrl": "http://www.colourlovers.com/images/badges/c/10129/10129945_.png",
        "apiUrl": "http://www.colourlovers.com/api/color/E7F510"
    }
];

const check = {
    type: "array",
    items: {
        type: "object",
        additionalProperties: false, 
        required: ["id", "title", "userName"], 
        properties: {
            id: { type: "number" },
            title: { type: "string" },
            userName: { type: "string" },
            numViews: { type: "number" },
            numVotes: { type: "number" },
            numComments: { type: "number" },
            numHearts: { type: "number" },
            rank: { type: "number" },
            dateCreated: { type: "string" },
            hex: { type: "string" },
            rgb: { type: "object",
                   properties: {
                        red: { type: "number", format: "byte"  },
                        green: { type: "number", format: "byte"  },
                        blue: { type: "number", format: "byte"  }
                   }
            },
            hsv: { type: "object",
                   properties: {
                        hue: { type: "number" },
                        saturation: { type: "number" },
                        value: { type: "number" }
                   }
            },
            description: { type: "string" },
            url: { type: "string" },
            imageUrl: { type: "string" },
            badgeUrl: { type: "string", format: "uri" },
            apiUrl: { type: "string", format: "uri" }
        }    
    }
};
  

// Mit der Funktion compile() lesen wir das Schema ein.
// Wir erstellen somit einen Testfall, mit dem wir die Daten prüfen und Fehler ausgeben lassen können.
const test = ajv.compile(check);

// Wir rufen den Test mit den Daten auf.
// Das Ergebnis ist ein Boolean, der uns mitteilt, ob die Daten dem Schema folgen oder nicht.
const result = test(colors);

// Durch das Modul ajv-errors bekommen wir viele nützliche Informationen zu den Fehlern heraus,
// auf die wir über test.errors zugreifen können.
console.log(result, test.errors);
