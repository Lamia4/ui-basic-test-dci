import Ajv from "ajv";
import ajvErrors from "ajv-errors";
import ajvFormats from "ajv-formats";
const ajv = new Ajv({ allErrors: true, coerceTypes: true, allowUnionTypes: true });

ajvErrors(ajv);
ajvFormats(ajv);

const validation = (schema) => {
    return (req, res, next) => {
        const test = ajv.compile(schema);
        const result = test(req);

        if (!result) return res.status(400).json(test.errors);

        next();
    };
};

export default validation;
