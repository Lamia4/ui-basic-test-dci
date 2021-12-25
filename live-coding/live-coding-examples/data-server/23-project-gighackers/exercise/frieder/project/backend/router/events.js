const router = require("express").Router({ mergeParams: true });
const checkAuth = require("../middleware/checkAuth.js");

const eventsController = require("../controller/events.js");
const guestsRouter = require("./guests.js");

const validation = require("../middleware/validate.js");
const eventsSchema = require("../schema/events.json");

router.get("/:eventId?", validation.validate(eventsSchema.GET), eventsController.read);
router.post("/", checkAuth, validation.validate(eventsSchema.POST), validation.validateDateValue, eventsController.create);
router.patch("/:eventId", checkAuth, validation.validate(eventsSchema.PATCH), eventsController.update);
router.delete("/:eventId", checkAuth, validation.validate(eventsSchema.DELETE), eventsController.delete);

router.use("/:eventId/guests", guestsRouter);

module.exports = router;
