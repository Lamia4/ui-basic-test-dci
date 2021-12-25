import mongoose from "mongoose";

const UserSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: value => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value),
        unique: true,
    },
    password : String
});



const User = mongoose.model("User", UserSchema);

async function read (email) {

    const Galip = { email: email };

    const foundedUser = await User.find(Galip).exec();

    console.log(foundedUser);
    return foundedUser;
};



async function create (name, email) {

    const Galip = new User({ name: name, email: email });

    console.log(Galip);
    
    await Galip.save((err, userName) => {
        if(err) return console.error(err + "user: " + userName + " couldnt be saved! ");
        console.log(userName + " saved successfully. ");
    })


};

async function deleteUser (name) {

    const Galip = { name: name };

    await User.deleteOne(Galip, ( isError, deletedUserInfo ) => {
        if(isError) return console.error("error deleting user: " + isError);
        console.log("user deleted", deletedUserInfo);
    })
};

async function updateUser (name, email) {

    const userFilter = { name: name };

    const userUpdates = { email: email}

    await User.findOneAndUpdate(userFilter, userUpdates, {new: true}, ( isError, updatedUser ) => {
        if(isError) return console.error("error updated user: " + isError);
        console.log("user updated", updatedUser);
    })
};



export default { read, create, deleteUser, updateUser}