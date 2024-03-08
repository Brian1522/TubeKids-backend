const cuentasGet = (req, res) => {
    res.json({
        data: 'Haciendo get Cuenta'
    });
}

const cuentasPost = (req, res) => {
    res.json({
        data: 'Haciendo post Cuenta'
    });
}

module.exports = { cuentasGet, cuentasPost };