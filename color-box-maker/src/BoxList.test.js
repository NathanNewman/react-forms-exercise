import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import BoxList from "./BoxList";

afterEach(cleanup);

// smoke test
it("renders without crashing", function() {
  render(<BoxList />);
});

// snapshot
test("it matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("creates a new box", () => {
  const { queryByText, getByText } = render(<BoxList />);
  const addBoxButton = queryByText("Add a new box!");
  fireEvent.click(addBoxButton);
  const button = getByText("X");
  expect(button).toBeInTheDocument();
});

it("removes a box", () => {
  const { queryByText } = render(<BoxList />);
  const addBoxButton = queryByText("Add a new box!");
  fireEvent.click(addBoxButton);
  const removeButton = queryByText("X");
  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});
