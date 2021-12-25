const GuestModel = require("../model/Guest.js");
const Event = require("../model/Event.js");

module.exports = {
    create: async (req, res, next) => {

        // ticket #007: überprüfen ob Event überhaupt existiert
        const isEvent = await Event.exists(req.params.eventId);
        if(!isEvent) return res.status(404).send("Event ID existiert nicht")

        // ticket #006: überprüfen ob noch Tickets verfügbar sind
        // Event nach Id --> Attribut: maxNumberGuests
        // Falls currentGuests +1 > maxNumberGuests --> reject ("is full") // statusCode ??
        // Berechnung currentGuests?
        // weg1: Guests rein, filtern nach eventID und zählen der Einträge
        // weg2: Schema Events erweitern mit Array der Gäste (braucht an mehreren Stellen Anpassungen)
       const currentNumberOfGuests = await GuestModel.currentNumberOfGuests(req.params.eventId)
       const maxNumberGuests = (await Event.readOne(req.params.eventId)).maxNumberGuests
       if (currentNumberOfGuests >= maxNumberGuests) return res.status(409).send("Event ist bereits ausgebucht.")
       
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

        // ticket #008: überprüfen ob Konzertticket überhaupt existiert
        const isTicket = await GuestModel.exists(req.params.ticketId);
        if(!isTicket) return res.status(404).send("Ticket ID existiert nicht")

        try {
            await GuestModel.deleteByTicketId(req.params.ticketId);
            res.status(204).send();
        } catch (error) {
            
            next(error);
        }
    },
};
