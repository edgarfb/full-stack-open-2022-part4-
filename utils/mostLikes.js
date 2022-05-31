const toObject = require("./toObject");

const mostLikes = (blogs) => {
  const result = blogs.map((blog) => {
    return {
      author: blog.author,
      likes: blog.likes,
    };
  });

  const initialValue = [];

  const reducer = (acc, currentValue) => {
    if (!acc[currentValue.author]) {
      acc[currentValue.author] = currentValue.likes;
    } else {
      acc[currentValue.author] += currentValue.likes;
    }
    return acc;
  };

  const flatLikes = result.reduce(reducer, initialValue);

  const newFormatedAuthors = toObject("author", "likes", flatLikes).sort(
    (a, b) => b.likes - a.likes
  );
  return newFormatedAuthors[0];
};

module.exports = mostLikes;
