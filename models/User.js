const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
    email: {
        type: String, 
        required: [true, `A valid email address is required.`], 
        unique: [true, `This email is already registered.`],
        validate: {
            validator: function(email) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
            }, 
            messge: `Not a valid email address. Try again.`
        }
    },
    username: {
        type: String,
        required: [true, `A valid username is required.`],
        unique: [true, `This username is already registered.`],
        minlength: [5, `A username must be at least 5 characters long.`],
        maxlength: [25, `A username cannot be more than 25 characters long.`]
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);

