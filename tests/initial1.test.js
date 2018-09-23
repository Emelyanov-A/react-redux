import expect from "expect";
import lt from "./../src/app/index";

describe("First test", () => {
  it("should pass", () => {
    expect(lt).toEqual(123);
  });
});
