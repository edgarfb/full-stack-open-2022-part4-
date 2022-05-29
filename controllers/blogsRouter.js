const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const log = require("../utils/logger");

// here the path '/' means the path will start from '/api/blogs/

blogsRouter.get("/", (req, res) => {
  Blog.find({})
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((error) => log.error(error));
});
blogsRouter.get("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((blog) => {
      res.status(200).json(blog);
    })
    .catch((error) => log.error(error));
});
blogsRouter.delete("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndRemove(id)
    .then((blog) => {
      res.json(blog);
    })
    .catch((error) => log.error(error));
});

blogsRouter.post("/", (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => log.error(error));
});

blogsRouter.put("/:id", (req, res) => {
  const id = req.params.id;

  const { title, author, url, likes } = req.body;
  const newData = { title, author, url, likes };

  Blog.findByIdAndUpdate(id, newData, { new: true })
    .then(() => res.json(newData))
    .catch((error) => log.error(error));
});

module.exports = blogsRouter;
