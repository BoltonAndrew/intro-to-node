const capitalize = (req, res, next) => {
  if (req.body.name) {
    let splitStr = req.body.name.split("");
    splitStr[0] = splitStr[0].toUpperCase();
    req.body.name = splitStr.join("");
  }
  next();
};

module.exports = capitalize;
