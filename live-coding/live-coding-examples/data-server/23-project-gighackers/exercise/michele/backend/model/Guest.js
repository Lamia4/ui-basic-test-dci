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


async function exists(ticketId){
	return await Guest.exists({ _id: ticketId });
}


async function currentNumberOfGuests (id) {
	return (await Guest.aggregate([
		{
			$match: { eventId: mongoose.Types.ObjectId(id) },
		},
		{
            $count: "currentNumberOfGuests"
        }
	]))[0].currentNumberOfGuests;
}

module.exports = {
	create,
	deleteByTicketId,
	exists,
	currentNumberOfGuests
};
