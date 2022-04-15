import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

type IMessage = {
  message: string;
};

const Greeting = ({ message }: IMessage) => (
  <div>
    <h1>Greeting</h1>
    <div>{message}</div>
  </div>
);

describe("Greeting component", () => {
  it("should...", () => {
    render(<Greeting message="Hello" />);
    const value = screen.getByText(/Hello/i);
    expect(value).toBeTruthy();
  });
});
