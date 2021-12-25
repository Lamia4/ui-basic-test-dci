import db from './database/connection.js';
import User from './model/User.js';

db.once('open', async function() {
	console.log("connected");

	var user;

	try {
		user = new User({
			name: "Eve",
			emmail: "eve@example.org"
		});
	} catch(e){
		console.error("error: ", e);
		return;
	}
		
	await user.save(function(err, user) {
		if (err) return console.error('error user:', user, 'could not be saved', err);
		console.log('user saved');
	});
		

	db.close();
});
