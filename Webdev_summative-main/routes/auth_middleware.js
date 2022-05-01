const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is needed for authentication");
  }
  try {
    const secret_token="Thel25";
    const decoded = jwt.verify(token, secret_token);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;