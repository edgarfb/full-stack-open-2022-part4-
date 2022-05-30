const mostBlogs = require("../utils/mostBlogs");
const blogs = require("./blogsMock");

describe("Most blogs", () => {
  test("The author with the largest publications", () => {
    const result = mostBlogs(blogs);
    expect(result.blogs).toEqual(3);
  });
});
