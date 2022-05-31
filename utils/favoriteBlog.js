const favoriteBlog = (blogs) => {
  const moreLikes = blogs.sort((a, b) => b.likes - a.likes);
  const { title, author, likes } = moreLikes[0];
  const favortite = {
    title,
    author,
    likes,
  };
  return favortite;
};

module.exports = favoriteBlog;
