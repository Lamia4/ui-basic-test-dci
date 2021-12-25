const router = require("express").Router({ mergeParams: true });

const authController = require("../controller/auth.js");

const validation = require("../middleware/validate.js");
const authSchema = require("../schema/auth.json");

router.post("/login", validation.validate(authSchema.POST), authController.login);

router.post("/resetPassword", authController.resetPassword);

module.exports = router;
