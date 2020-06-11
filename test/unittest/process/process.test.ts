import { demoTest } from "../../../src/process";

describe("testProcess function", () => {
  test("testProcess should return hello world", () => {
    expect(demoTest()).toEqual("hello world");
  });
});
