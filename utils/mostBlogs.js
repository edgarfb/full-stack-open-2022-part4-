const toObject = require("./toObject");
const mostBlogs = (blogs) => {
  const authors = blogs.map((blog) => blog.author);

  const initialValue = {};

  const reducer = (acc, currentValue) => {
    if (!acc[currentValue]) {
      acc[currentValue] = 1;
    } else {
      acc[currentValue] = acc[currentValue] + 1;
    }
    return acc;
  };

  // return an object like {'name': 1 (amount of post) }
  const flatAuthors = authors.reduce(reducer, initialValue);
  const formatedAuthors = toObject("author", "blogs", flatAuthors);

  //  sort and return just the first item
  return formatedAuthors.sort((a, b) => b.blogs - a.blogs)[0];
};

module.exports = mostBlogs;
