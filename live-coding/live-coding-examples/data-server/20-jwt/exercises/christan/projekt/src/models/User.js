import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: String,
	token: String,
}, {versionKey: false});

const User = mongoose.model('User', UserSchema);


//----- funciones -------//

async function read (id) {
	return await User.findById(id);
}

async function register (first_name, last_name, email, password) {

	const user = new User({
		first_name,
		last_name,
		email,
		password,
	});

	await user.save(function (err, user) {
		if (err) return console.error(err, 'user:', user, 'could not be saved');
		console.log('user saved');
	});
}

async function updateCredentials (email, password) {
	// ...
}

async function addProductToWishList (userId, productId) {
	const user = await User.findById(userId);
	if (!user) throw new Error("user not found");
	user.wishList.push({ productId });
	return await user.save();
}

async function markProductAsBuyed (userId, productId) {
	const user = await User.findById(userId);
	if (!user) throw new Error("user not found");

	const position = user.readingList.findIndex(product => product.productId === productId);
	if (position === -1) throw new Error("article not found");

	user.readingList[position].read = 1;

	return await user.save();
}

export default {
	read,
	register,
	updateCredentials,
	addProductToWishList,
	markProductAsBuyed,
};
