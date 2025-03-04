const { validationResult } = require("express-validator");

//middleware => if their are any errors from rules
const ValidatorMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = ValidatorMiddleware;