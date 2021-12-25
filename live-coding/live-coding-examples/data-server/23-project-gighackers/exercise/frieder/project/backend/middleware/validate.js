const Ajv = require("ajv");
const ajvErrors = require("ajv-errors");
const ajvFormats = require("ajv-formats");
const { error } = require("ajv/dist/vocabularies/applicator/dependencies");
const ajv = new Ajv({ allErrors: true, coerceTypes: true, allowUnionTypes: true });

ajvErrors(ajv);
ajvFormats(ajv);

const validate = schema => (req, res, next) => {
    const test = ajv.compile(schema);
    const result = test(req);

    if (!result) return res.status(400).json(test.errors.map(error => error.message));
    next();
};

const validateDateValue = (req, res, next) => {
    if (new Date(req.body.date) > new Date(Date.now() + 24 * 60 * 60 * 1000)) return next();
    const err = new Error('deadline of date missed')
    console.error(err.name + ": " + err.message);
    res.status(400).json(err.message);
}

module.exports = { 
    validate,
    validateDateValue
};
