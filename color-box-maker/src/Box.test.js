import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Box from "./Box";

// smoke test
it("renders without crashing", function() {
  render(<Box />);
});

// snapshot
test("it matches snapshot", () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

describe("Box component", () => {
  it("renders a box with the specified width, height, and background color", () => {
    const { container } = render(
      <Box height={30} width={20} backgroundColor="blue"/>
    );
    const box = container.querySelector("div[style]");
    expect(box.style.height).toBe("30em");
    expect(box.style.width).toBe("20em");
    expect(box.style.backgroundColor).toBe("blue");
  });
});
