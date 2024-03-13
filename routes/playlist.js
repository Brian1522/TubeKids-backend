const { Router } = require("express");
const { check } = require("express-validator");

const { playlistGet, playlistPost, playlistDelete } = require("../controllers/playlist");
const { validateFields } = require("../middawares/validate-fields");
const { isRegisteredVideo, isRegisteredUrl, isRegisteredPlaylist } = require("../helpers/db-validator");


const router = Router();

router.get("/", playlistGet);
router.post("/", [
    check("name", "Name is required").not().isEmpty().custom(isRegisteredVideo), //valida que venga los campos
    check("url", "URL is required").not().isEmpty().custom(isRegisteredUrl), //valida que venga los campos
    validateFields

], playlistPost);

router.delete("/:id", [
    check("id", "Id is invalid").isMongoId().custom(isRegisteredPlaylist),
    validateFields
], playlistDelete
);

module.exports = router;