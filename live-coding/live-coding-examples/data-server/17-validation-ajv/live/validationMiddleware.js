import Ajv from "ajv";
import ajvErrors from "ajv-errors";
import ajvFormats from "ajv-formats";
const ajv = new Ajv({ allErrors: true, coerceTypes: true, allowUnionTypes: true });

ajvErrors(ajv);
ajvFormats(ajv);

// Die Funktion validation() ist noch nicht die eigentliche Middleware, gibt diese aber zurück.
// Dadurch ist es möglich, dass wir das Schema separat übergeben können, um die Middleware für sämtliche Endpoints zu verwenden.
const validation = (schema) => {
    return (req, res, next) => {
        const test = ajv.compile(schema);
        const result = test(req);

        // Schlägt die Validierung fehl, geben wir die Fehler zurück und beenden den Aufruf
        if (!result) return res.status(400).json(test.errors);

        // Ansonsten springen wir mit next() in die nächste Middleware/den nächsten Controller
        next();
    };
};

export default validation;

// Im Router importieren wir sowohl die hier exportierte validation(), als auch die Schemas, die wir verwenden wollen.
// Pro Methode binden wir dann die Middleware ein, indem wir validation() mit dem Schema aufrufen.
// router.post("/", validation(postSchema), usersController.create);
