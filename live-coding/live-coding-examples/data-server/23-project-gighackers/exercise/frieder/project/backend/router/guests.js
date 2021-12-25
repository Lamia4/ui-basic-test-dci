const router = require("express").Router({ mergeParams: true });

const guestsController = require("../controller/guests.js");

const validation = require("../middleware/validate.js");
const guestsSchema = require("../schema/guests.json");

router.post("/:eventId", validation.validate(guestsSchema.POST), guestsController.create);
router.delete("/:ticketId", validation.validate(guestsSchema.DELETE), guestsController.delete);

module.exports = router;
