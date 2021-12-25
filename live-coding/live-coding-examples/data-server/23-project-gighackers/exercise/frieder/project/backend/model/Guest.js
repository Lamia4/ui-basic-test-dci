const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const GuestSchema = mongoose.Schema({
	_id: {
		type: String,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	eventId: {
		type: mongoose.Types.ObjectId,
		ref: "Event",
		required: true,
	},
}, { versionKey: false });

GuestSchema.pre('save', async function (next) {
	const filter = {
		eventId: this.eventId
	};
	const count = (await Guest.find(filter)).length;
	const slots = (
		await this
		.populate('eventId')
		.execPopulate()
	).eventId
	.maxNumberGuests;
	
	if (count < slots) next();
	const error = Error("Tickets are sold out");
	error.name = "SoldOutError";
	throw error
});

const Guest = mongoose.model("Guest", GuestSchema);

async function deleteByTicketId (ticketId) {
	return await Guest.deleteOne({ _id: ticketId });
}

async function create ({ firstName, lastName, eventId }) {
	const guest = new Guest({
		_id: uuid(),
		firstName,
		lastName,
		eventId,
	});

	return await guest.save();
}

module.exports = {
	create,
	deleteByTicketId,
};
