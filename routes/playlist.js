const { Router } = require("express");

const playlistGet = require("../controllers/playlist");

const router = Router();

router.get("/", playlistGet);

module.exports = router;