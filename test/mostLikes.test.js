const blogs = require("./blogsMock");
const mostLikes = require("../utils/mostLikes");

describe("Most author likes", () => {
  test("Should return just 1 object", () => {
    const result = mostLikes(blogs);

    const expected = {
      author: "Edsger W. Dijkstra",
      likes: 17,
    };
    expect(result).toEqual(expected);
  });
});
