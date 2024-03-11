const { Schema, model } = require("mongoose");

const PlaylistSchema = Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    url: {
        type: String,
        required: [true, "URl is required"],
    }
});
module.exports = model("Playlist", PlaylistSchema);