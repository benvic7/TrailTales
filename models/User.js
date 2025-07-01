const mongoose = require("mongoose")

// TO-DO: add more for TT (favorite mountain, home mountain, mountains skied at, hours skied, miles skied, etc.)
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email:{
        type: String,
        require: true,
        max: 50,
        unique: true,
    },
    password:{
        type: String,
        require: true,
        min: 6,
        unique: true,
    },
    profilePicture:{
        type: String,
        default: "",
    },
    coverPicture:{
        type: String,
        default: "",
    },
    followers:{
        type: Array,
        default: [],
    },
    following:{
        type: Array,
        default: [],
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        max: 50,
    },
    live: {
        type: String,
        max: 50,
    },
    from: {
        type: String,
        max: 50,
    },
    homeMountain: {
        type: String,
        max: 50,
    },
    favoriteMountain: {
        type: String,
        max: 50,
    },
    skier: {
        type: Number,
        enum: [1, 2, 3],
    }
},
    {timestamps: true}
);

module.exports = mongoose.model("User", userSchema);
