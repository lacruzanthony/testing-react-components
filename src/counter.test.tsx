import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./counter";

describe("Testing counter", () => {
  it("should increment onClick()", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Click me"));

    expect(screen.getByText("You clicked 1 times")).toBeInTheDocument();
  });
});
