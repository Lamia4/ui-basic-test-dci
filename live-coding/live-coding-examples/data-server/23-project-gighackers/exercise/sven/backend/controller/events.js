const EventModel = require("../model/Event.js");

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
        if(!eventId                     //Wenn keine EventID da, leg an, wenn da, Fehler!6
            && maxNumberGuests >= req.body.maxNumberGuests) // wenn noch Plätze frei sind, tu Dinge.7
            {
        try {
            const newEvent = await EventModel.create({
                title: req.body.title,
                date: req.body.date,
                maxNumberGuests: req.body.maxNumberGuests,
            });
            res.json({ newEvent });
        
        } catch (error) {
            //Fehlermeldung eingefügt!
            if (error.name === "ValidationError") return res.status(400).send("Please insert your full name.");  
            next(error);
        }
    }},

    update: async (req, res, next) => {
        try {
            const response = await EventModel.update(req.params.eventId, {
                title: req.body.title,
                date: req.body.date,
                maxNumberGuests: req.body.maxNumberGuests,
            });

            res.json(response);
        } catch (error) {
            next(error);
        }
    },

    delete: async (req, res, next) => {
        try {
            await EventModel.deleteById(req.params.eventId);
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    },
};
