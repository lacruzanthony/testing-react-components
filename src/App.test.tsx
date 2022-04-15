import { fireEvent, render } from "@testing-library/react";
import App from "./App";

describe("empty", () => {
  it("should work", () => {
    expect(true).toEqual(true);
  });
});

describe("App theme", () => {
  it("should toggle the theme", () => {
    const mockHandler = jest.fn();
    const { getByTestId } = render(<App />);
    const toggleBtn = getByTestId("theme-button");
    toggleBtn.onclick = mockHandler;
    fireEvent.click(toggleBtn);
    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(getByTestId("app-test")).toHaveClass("dark-theme");
    fireEvent.click(toggleBtn);
    expect(mockHandler).toHaveBeenCalledTimes(2);
    expect(getByTestId("app-test")).toHaveClass("light-theme");
  });
});
