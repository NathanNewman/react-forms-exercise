import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import ToDo from "./ToDo";

afterEach(cleanup);

// smoke test
it("renders without crashing", function() {
  render(<ToDo />);
});

// snapshot
test("it matches snapshot", () => {
  const { asFragment } = render(<ToDo />);
  expect(asFragment()).toMatchSnapshot();
});

it("render a todo", () => {
  const { getByText } = render(<ToDo name="test" />);
  const todo = getByText("test");
  expect(todo).toBeInTheDocument();
});
