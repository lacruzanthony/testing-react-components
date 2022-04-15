import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("empty", () => {
  it("should work", () => {
    expect(true).toEqual(true);
  });
});

describe("App theme", () => {
  it("should toggle the theme", () => {
    const { container } = render(<App />);
    console.log(container.classList);
    fireEvent.click(screen.getByText("Change theme"));
    console.log(container.classList);

    // expect(screen.getByText("Hello CodeSandbx!").cla.color).toBe("#eee");
  });
});
