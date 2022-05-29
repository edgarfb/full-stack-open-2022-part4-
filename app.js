const express = require("express");
const app = express();
const log = require("./utils/logger");
const { MONGODB_URI } = require("./utils/config");
const cors = require("cors");
const blogsRouter = require("./controllers/blogsRouter");
const {
  reqLogger,
  errorHandler,
  unknownEndpoint,
} = require("./utils/middleware");

app.use(express.json());
app.use(reqLogger);

const mongoose = require("mongoose");

log.info("MongoDB connect", MONGODB_URI);
mongoose
  .connect(MONGODB_URI)
  .then(() => log.info("Connected to MongoDB"))
  .catch((err) => log.error("Error connecting to MongoDB: ", err.message));

app.use(cors());

app.use("/api/blogs", blogsRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

module.exports = app;
