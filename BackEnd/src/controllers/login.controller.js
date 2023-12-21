const Usuario = require("../models/usuario.model");
const catchError = require("../utils/catchError");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginAuth = catchError(async (req, res) => {
  const { email, password } = req.body;
  console.log("hola")
  const user = await Usuario.findOne({ where: { email } });
  if (!user) return res.status(401).json({ message: "user not found" });
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(401).json({ message: "invalid credentials" });
  const token = jwt.sign({ user }, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });
  return res.json({ user, token });
});

module.exports = {
  loginAuth,
};
