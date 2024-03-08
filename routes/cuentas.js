const {Router} = require('express');

const {cuentasGet,cuentasPost} = require("../controllers/cuentas");

const router = Router();

router.get("/", cuentasGet);
router.post("/", cuentasPost);

module.exports = router;