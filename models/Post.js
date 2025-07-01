const { Timestamp } = require("mongodb");
const mongoose = require("mongoose")

// TO-DO: add more for TT (favorite mountain, home mountain, mountains skied at, hours skied, miles skied, etc.)
const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        max: 500
    },
    image: {
        type: String
    },
    mountain: {
        type: String,
        required: true
    },
    runs: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
    },
    topSpeed: {
        type: Number
    },
    skiDistance: {
        type: Number
    },
    skiVertical: {
        type: Number
    },
    likes: {
        type: Array,
        default:[]
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("Post", PostSchema);
