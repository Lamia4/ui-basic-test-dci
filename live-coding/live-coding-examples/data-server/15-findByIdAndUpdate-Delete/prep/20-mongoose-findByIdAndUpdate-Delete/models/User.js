import mongoose from "mongoose";

// Für Objekte, die wir innerhalb eines Dokuments speichern wollen, können wir ein separates Schema anlegen.
// Hier beschreiben wir also, wie ein einzelner Eintrag in der Reading List aussehen muss.
// Mit der Option "_id: false" verhindern wir, dass eine ObjectId erstellt wird. Da unser Eintrag über die articleId
// bereits eindeutig identifiziert werden kann, benötigen wir keine weitere ID.
const ReadingListItemSchema = mongoose.Schema({
	articleId: {
		type: String,
		required: true,
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

// Damit es ein Artikel auf die Reading List eines Users schafft, definieren wir eine Funktion dafür, die die userId und die articleId benötigt.
UserSchema.statics.readAll = async function() {
	return await this.find();
}

UserSchema.statics.readOne = async function(id) {
	return await this.findById(id);
}

UserSchema.methods.addArticleToReadingList = async function (articleId) {
	this.readingList.push({ articleId });
	return await this.save();
}

UserSchema.statics.addArticleToReadingListByUserId = async function (userId, articleId) {
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

UserSchema.statics.markArticleAsRead = async function(userId, articleId) {
	const user = await User.findById(userId);
	if (!user) throw new Error("user not found");

	const position = user.readingList.findIndex(article => article.articleId === articleId);
	if (position === -1) throw new Error("article not found");

	user.readingList[position].read = 1;

	return await user.save();
}

UserSchema.methods.register = async function(name, email, password) {
	const user = new User({
		name,
		email,
        password,
	});

	return await user.save();
}

UserSchema.methods.updateCredentials = async function(email, password) {
	return null;
}

// export default {
// 	readAll,
//     readOne,
// 	register,
// 	updateCredentials,
// 	addArticleToReadingList,
// 	markArticleAsRead,
// };

const User = mongoose.model("User", UserSchema);
export default User;
