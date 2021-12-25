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

const model = mongoose.model('Articles', Schema);
export default model;
