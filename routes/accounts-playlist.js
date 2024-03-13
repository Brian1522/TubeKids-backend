const { Router } = require("express");
const { check } = require("express-validator");

const { accountsPlaylistGet, accountsplaylistPost} = require("../controllers/accounts-playlist");
const { validateFields } = require("../middawares/validate-fields");
const { isRegisteredVideo, isRegisteredUrl, isRegisteredPlaylist } = require("../helpers/db-validator");


const router = Router();

router.get("/", accountsPlaylistGet);
router.post("/", [
    check("userId", "UserId is required").not().isEmpty(), //valida que venga los campos
    check("idplaylist", "IdPlaylist is required").not().isEmpty(), //valida que venga los campos
    validateFields

], accountsplaylistPost);

module.exports = router;