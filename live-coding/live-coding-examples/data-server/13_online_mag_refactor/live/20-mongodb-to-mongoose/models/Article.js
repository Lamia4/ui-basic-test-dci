import mongoose from 'mongoose';

const Schema = mongoose.Schema(
	{
		title: String,
		teaser: String,
		text: String
	}, 
	{
		strict: "throw"
	}
);

const model = mongoose.model('Articles', Schema);

// Folgende Funktionen könnten in einem Article Model implementiert sein:

async function update () {
	// ....
}

async function publish () {
	// ....

}

async function unpublish () {
	// ....
}

export default model;

//export default {
//	update,
//	publish,
//	unpublish,
//};
