const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const { info, error } = require("./utils/logger");

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

const Blog = mongoose.model("Blog", blogSchema);

const pass = "Pfso48149";
const dataBase = "blog-list";
const mongoUrl = `mongodb+srv://edgarfbFSO:${pass}@cluster0.eoy65.mongodb.net/${dataBase}?retryWrites=true&w=majority`;
mongoose.connect(mongoUrl);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App works!!");
});

app.get("/api/blogs", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

app.post("/api/blogs", (request, response) => {
  const blog = new Blog(request.body);

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

const PORT = 3003;
app.listen(PORT, () => {
  info(`Server running on port ${PORT}`);
});
