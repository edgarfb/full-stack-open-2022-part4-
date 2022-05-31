const toObject = (prop1, prop2, context) => {
  const formatedAuthors = [];
  // populate the formatedAuthor array

  for (const key in context) {
    formatedAuthors.push({
      [prop1]: key,
      [prop2]: context[key],
    });
  }
  return formatedAuthors;
};

module.exports = toObject;
