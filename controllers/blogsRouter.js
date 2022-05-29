"use strict";
const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

// here the path '/' means the path will start from '/api/blogs/

blogsRouter.get("/", (req, res, next) => {
  Blog.find({})
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((error) => next(error));
});
blogsRouter.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((blog) => {
      res.status(200).json(blog);
    })
    .catch((error) => next(error));
});
blogsRouter.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  Blog.findByIdAndRemove(id)
    .then((blog) => {
      res.json(blog);
    })
    .catch((error) => next(error));
});

blogsRouter.post("/", (req, res, next) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => next(error));
});

blogsRouter.put("/:id", (req, res, next) => {
  const id = req.params.id;

  const { title, author, url, likes } = req.body;
  const newData = { title, author, url, likes };

  Blog.findByIdAndUpdate(id, newData, { new: true })
    .then(() => res.json(newData))
    .catch((error) => next(error));
});

module.exports = blogsRouter;
