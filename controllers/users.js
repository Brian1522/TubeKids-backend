const bcryptjs = require("bcryptjs");
const { response, request } = require("express");

const User = require("../models/user");



const userGet = async (req,res) => {
    const user = await User.find({ status:true}); // trae todos los usuarios en tue
    const totaluser = await User.countDocuments({status:true});
    res.json({
        user,
        totaluser
    });
}
const userPost = async (req, res = response) => {
    const { name, email, cellphone, password, role, lastname, birthday, country, pin } = req.body;

    const user = new User({
        name, email, cellphone, password, role, lastname, birthday, country, pin
    });

     if (password) {
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt); // encripta la contra
    }
 
    await user.save(); // se guarda
    res.status(201).json({
        msg: 'user created',
        user
    })
}


module.exports = { userGet, userPost};