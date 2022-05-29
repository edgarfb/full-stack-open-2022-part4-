const listHelper = require("../utils/list_helper").dummy;

test("Dummy returns one", () => {
  const blogs = [];
  const result = listHelper(blogs);
  expect(result).toBe(1);
});
