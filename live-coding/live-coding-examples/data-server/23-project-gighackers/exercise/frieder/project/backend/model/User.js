const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	fullName: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	question: {
		type: String,
		required: true
	},
	answer: {
		type: String,
		required: true
	}
}, { versionKey: false });

const User = mongoose.model("User", UserSchema);

async function login ({ username, password }) {
	const user = await User.findOne({ username });
	if (!user) throw new Error("user_not_found");

	const isPasswordCorrect = await bcrypt.compare(password.toString() + process.env.PEPPER, user.password);
	if (!isPasswordCorrect) throw new Error("password_incorrect");

	return { userId: user._id, name: user.fullName };
}

async function findByUsername (usernameP) {
	const projection = { username: true, answer: true }; // oder "username answer" oder ["username", "answer"]
	return await User.findOne({ username: usernameP }, projection);
}

async function resetPassword (username, generatedPasswordHashed) {
	return await User.findOneAndUpdate({ username }, { password: generatedPasswordHashed });
}

module.exports = {
	login,
	findByUsername,
	resetPassword
};
