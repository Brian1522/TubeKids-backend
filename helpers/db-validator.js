const User = require("../models/user");

const isRegisteredEmail = async (email = "") => {
    const emailExist = await User.findOne({ email });

    if (emailExist) {
        throw new Error(`Email ${email} is already registered`);
    }
};

module.exports = { isRegisteredEmail }