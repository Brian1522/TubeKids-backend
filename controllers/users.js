const { response, request } = require("express");


const userGet = async (req = request, res = response) => {
    res.json({
        data: 'hola mundo'
    })
}
module.exports = userGet;