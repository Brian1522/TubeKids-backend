const { Router } = require("express");
const { check } = require("express-validator");

const { validateFields } = require("../middawares/validate-fields");

const { login } = require("../controllers/auth");

const router = Router();

router.post(
  "/login",
  [
    check("email", "Email is not valid").isEmail(), //valida correo
    check("password", "Password can't be empty").not().isEmpty(), //valida password
    validateFields,
  ],
  login
);

module.exports = router;