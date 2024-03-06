const { Router } = require("express");

const {playlistGet,playlistPost} = require("../controllers/playlist");

const router = Router();

router.get("/", playlistGet);
router.post("/", playlistPost);

module.exports = router;