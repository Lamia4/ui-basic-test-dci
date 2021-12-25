const GuestModel = require("../model/Guest.js");
const EventModel = require("../model/Event.js");

module.exports = {
    create: async (req, res, next) => {
        try {
            if(!await EventModel.exists(filter)) {
                const error = Error("Event not found");
                error.name = "NotFoundError";
                throw error;
            }

            const newGuest = await GuestModel.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                eventId: req.params.eventId,
            });
            res.status(201).json({ newGuest });
        } catch (error) {
            if (error.name === "ValidationError") return res.status(400).send();
            if (error.name === "SoldOutError") return res.status(422).json(error.message);
            if (error.name === "NotFoundError") return res.status(404).json(error.message);
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            if(!await GuestModel.exists(req.params.ticketId)) {
                const error = Error("Event not found");
                error.name = "NotFoundError";
                throw error;
            }

            await GuestModel.deleteByTicketId(req.params.ticketId);
            res.status(204).send();
        } catch (error) {
            if (error.name === "NotFoundError") return res.status(404).json(error.message);
            next(error);
        }
    },
};
