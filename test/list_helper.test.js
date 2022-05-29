const { dummy, totalLikes } = require("../utils/list_helper");
const blogs = require("./blogsMock");
test("Dummy returns one", () => {
  const blogs = [];
  const result = dummy(blogs);
  expect(result).toBe(1);
});

describe("Total likes", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0,
    },
  ];

  test("When a list has only one blog, equals the likes of that", () => {
    const result = totalLikes(listWithOneBlog);
    expect(result).toBe(5);
  });
  test("When a list has many blogs, the likes are going to be the sum of them", () => {
    const result = totalLikes(blogs);
    expect(result).toBe(36);
  });
});
