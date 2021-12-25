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

        if(!(new Date(req.body.date) > new Date())){
            return res.status(422).send("Datum muß in der Zukunft liegen!");   
        }

        try {
            const newEvent = await EventModel.create({
                title: req.body.title,
                date: req.body.date,
                maxNumberGuests: req.body.maxNumberGuests,
            });
            res.json({ newEvent });
        } catch (error) {
            if (error.name === "ValidationError") return res.status(400).send();
            next(error);
        }
    },

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
            if(!await EventModel.exists(req.params.eventId))
                return res.status(404).send("Event nicht gefunden");

            await EventModel.deleteById(req.params.eventId);
            return res.status(200).send("Event gelöscht");
        } catch (error) {
            next(error);
        }
    },
};
