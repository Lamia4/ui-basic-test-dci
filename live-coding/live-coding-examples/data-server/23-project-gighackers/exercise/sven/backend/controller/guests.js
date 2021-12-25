const GuestModel = require("../model/Guest.js");

module.exports = {
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
        if (req.params.ticketId === ticketId) //Wenn usereingabe gleich ticketid, lösche ticketid.8
        try {
            await GuestModel.deleteByTicketId(req.params.ticketId);
            res.status(204).send();
        } catch (error) {
            return res.status(404).send("Id not found.") //Statusfehler hinzugefügt.8
            next(error);
        }
    },
};
