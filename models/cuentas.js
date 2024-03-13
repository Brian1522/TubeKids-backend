const { Schema, model } = require("mongoose");

const AcoountSchema = Schema({
    name: {
        type: String,
        required: [true, "name is required"],
    },
    pin: {
        type: String,
        required: [true, "PIN is required"],
    }
});
module.exports = model("Acoount", AcoountSchema);