const cuentas = require("../models/cuentas");
const Acoount = require("../models/cuentas");

const cuentasGet = (req, res) => {
    res.json({
        data: 'Haciendo get Cuenta'
    });
}

/*const cuentasPost = (req, res) => {
    res.json({
        data: 'Haciendo post Cuenta'
    });
}*/
const cuentasPost = async (req, res) => {
    const { name, pin } = req.body;

    const Account = new Acoount({
        name, pin
    });

    await Account.save(); // se guarda
    res.status(201).json({
        msg: 'Account created',
        Account
    })
}

module.exports = { cuentasGet,cuentasPost };