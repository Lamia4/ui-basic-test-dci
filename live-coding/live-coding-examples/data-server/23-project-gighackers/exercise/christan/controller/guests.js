const GuestModel = require("../model/Guest.js");

module.exports = {
    read: async (req, res, next) => {
        try {
            const response = req.params.eventId ? await EventModel.readOne(req.params.eventId) : await EventModel.readAll();
            if (!response) return res.status(404).send();

            res.json(response);
        } catch (error) {
            next(error);
        }
    },

    create: async (req, res, next) => {
        try {
            const newGuest = await GuestModel.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                eventId: req.params.eventId,
            });
            res.status(201).json({ newGuest });
        } catch (error) {
            if (error.name === "ValidationError") return res.status(400).send();
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            await GuestModel.deleteByTicketId(req.params.ticketId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    },
};
