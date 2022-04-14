import expect from "expect";
import createId from "./createId";

describe("createId", () => {
  it("should work again", () => {
    const actual = createId("123", "my test");
    const expected = "123-my-test";

    expect(actual).toEqual(expected);
  });
});
