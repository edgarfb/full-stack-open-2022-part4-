const favoriteBlog = require("../utils/favoriteBlog");
const blogs = require("./blogsMock");

describe("favorite blog", () => {
  test("Blog that have more likes", () => {
    const result = favoriteBlog(blogs);
    expect(result.likes).toEqual(12);
  });
});
