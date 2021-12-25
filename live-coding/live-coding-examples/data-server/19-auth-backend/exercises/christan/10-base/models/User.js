import mongoose from "mongoose";
import Article from "./Article.js";

// Für Objekte, die wir innerhalb eines Dokuments speichern wollen, können wir ein separates Schema anlegen.
// Hier beschreiben wir also, wie ein einzelner Eintrag in der Reading List aussehen muss.
// Mit der Option "_id: false" verhindern wir, dass eine ObjectId erstellt wird. Da unser Eintrag über die articleId
// bereits eindeutig identifiziert werden kann, benötigen wir keine weitere ID.
const ReadingListItemSchema = mongoose.Schema({
	articleId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Article'
	},
	read: {
		type: Number,
		default: 0,
	},
}, { _id: false });

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		//unique: true, // Folge => "natürliche" Namen könnten kollidieren
		                // deshalb nicht
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: String,

	// Das zuvor erstellte Schema nutzen wir jetzt hier im UserSchema.
	// Mit den eckigen Klammern geben wir an, dass es sich bei der readingList um ein Array handelt,
	// dessen Elemente dem ReadingListItemSchema folgen.
	readingList: [ReadingListItemSchema],

}, { versionKey: false });


// definiert einen Callback, 
// der immer nachdem die Methode 'findOneAndDelete' ausgeführt wird, 
// seinerseits ausgeführt wird:
UserSchema.post('findOneAndDelete', async (user) => {
	if (!user) return console.log('UserSchema.post.findOneAndDelete: no user deleted => no further action required');

	await Article.deleteManyByAuthorId(user._id);
});

const User = mongoose.model("User", UserSchema);

// Damit es ein Artikel auf die Reading List eines Users schafft, definieren wir eine Funktion dafür, die die userId und die articleId benötigt.
async function addArticleToReadingList (userId, articleId) {
	// Zuerst suchen wir den User und werfen einen Fehler, falls kein Datensatz gefunden werden kann.
	const user = await User.findById(userId);
	if (!user) throw new Error("user not found");

	// Anschließend fügen wir ein neues Objekt an die readingList an. Da "user" ein JavaScript Object ist, können wir alle Techniken und Funktionen nutzen, um die Daten zu verändern.
	// In diesem Fall nutzen wir .push(), um das Objekt hinzuzufügen.
	// Die read-Flag müssen wir nicht explizit setzen, da wir im Schema definiert haben, dass es den Standardwert 0 erhalten soll.
	// Mongoose wird "read" also automatisch mit dem Wert 0 ins Objekt schreiben.
	user.readingList.push({ articleId });

	// Speichern nicht vergessen, damit der aktualisierte Datensatz in der Datenbank landet.
	return await user.save();
}

async function deleteById(id){
	return await User.findByIdAndDelete(id);
}

async function exists(id) {
	return await User.exists({_id: id});
}

async function findByArticleIdInReadingList(articleId) {
	return User.find({'readingList.articleId': articleId});
}

async function removeArticleFromReadingLists(id) {
	await User.updateMany(
		{ 'readingList.articleId': id },
		// https://docs.mongodb.com/manual/reference/operator/update/pull/
		{ $pull: { readingList: { articleId: id } } }
	);
}

async function markArticleAsRead (userId, articleId) {
	const user = await User.findById(userId);
	if (!user) throw new Error("user not found");

	const position = user.readingList.findIndex(article => article.articleId === articleId);
	if (position === -1) throw new Error("article not found");

	user.readingList[position].read = 1;

	return await user.save();
}

async function readAll () {
	return await User.find();
}

async function readOne (id) {
	return await User.findById(id).populate('readingList.articleId');
}

async function register (nameP, emailP, passwordP) {
	const user = new User({
		name: nameP,
		email: emailP,
        password: passwordP,
	});

	return await user.save();
}

async function updateById(id, userObject) {
	return await User.findByIdAndUpdate(
		id, 
		userObject, 
		{new: true, runValidators: true}
	);
}

async function updateCredentials (email, password) {
	return null;
}


export default {
	deleteById,
	exists,
	findByArticleIdInReadingList,
	readAll,
    readOne,
	register,
	removeArticleFromReadingLists,
	updateById,
	updateCredentials,
	addArticleToReadingList,
	markArticleAsRead,
};
