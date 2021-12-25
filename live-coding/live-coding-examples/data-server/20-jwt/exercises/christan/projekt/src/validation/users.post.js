const userSchema = {
    type: "array",
    items: {
        type: "object",
        additionalProperties: true,
        required: ["id", "name", "email"], // Ist mindestens eine als "required" gelistete Property nicht vorhanden, führt das zu einem Fehler
        properties: {
            id: {
                type: "string",
                minLength: 6,
                maxLength: 10
            },
            first_name: {
                type: "string",
                minLength: 1,
                maxLength: 20
            },
            last_name: {
                type: "string",
                minLength: 1,
                maxLength: 20
            },
            email: {
                type: "string",
            },
            state: { // optional, da nicht in "required" aufgeführt. Wenn es in den Daten aber vorhanden ist, muss es vom Typ "string" sein
                type: "string",
            },
            country: { // optional, da nicht in "required" aufgeführt. Wenn es in den Daten aber vorhanden ist, muss es vom Typ "string" sein
                type: "string",
            },
        }
    }
};

export default userSchema;