const GuestModel = require("../model/Guest.js");
const EventModel = require("../model/Event.js");

module.exports = {
    create: async (req, res, next) => {
        
        // ========================================
        try {
            const event = await EventModel.readOne(req.params.eventId);

            if(!event) return res.status(404).send("EventId nicht gefunden");
            if(event.guests.length >= event.maxNumberGuests) return res.status(409).send("Event ausgebucht");

        }
        catch (error) {
            next(error);
        }
        // ========================================

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
