const { Router } = require("express");

const userGet = require("../controllers/users");

const router = Router();

router.get("/", userGet);

module.exports = router;