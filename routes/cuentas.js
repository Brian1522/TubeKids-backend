const {Router} = require('express');


const {cuentasGet,cuentasPost} = require("../controllers/cuentas");
const { check } = require('express-validator');
const { isRegisteredaccount} = require("../helpers/db-validator");

const { validateFields } = require("../middawares/validate-fields");

const router = Router();

router.get("/", cuentasGet);
router.post("/", [
    check("name","Name is required").not().isEmpty().custom(isRegisteredaccount),
    check("pin","Pin is required").isLength({ min: 6 }),
    validateFields


],cuentasPost);

module.exports = router;