const log = require("./logger");

const reqLogger = (req, res, next) => {
  log.info("------- Request info -------");
  log.info("Method: ", req.method);
  log.info("Path: ", req.path);
  log.info("Body: ", req.body);
  log.info("------- Request info -------");
  next();
};

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "Unknown endpoint" });
};

const errorHandler = (error, req, res, next) => {
  log.error("Error Name: ", error.name, "\n", "Error message: ", error.message);
  if (error.name === "CastError") {
    res.status(400).send({ error: "Malformated id" });
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }

  next(error);
};

module.exports = { reqLogger, errorHandler, unknownEndpoint };
