import mongoose from 'mongoose';

// Folgende Funktionen könnten in einem Article Model implementiert sein:

const SCHEMA_NAME = 'Article';

const Schema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
});

Schema.methods.update = async function() {
	// ....
}

Schema.methods.publish = async function() {
	// ....

}

Schema.methods.unpublish = async function() {
	// ....
}

const model = mongoose.model(SCHEMA_NAME, Schema);

export default model;
