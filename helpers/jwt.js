const jwt = require("jsonwebtoken");
const secret = "secret";

const createToken = (payload) => jwt.sign(payload, secret);
const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { createToken, verifyToken };
