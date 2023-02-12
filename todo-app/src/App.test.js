import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

// smoke test
it("renders without crashing", function() {
  render(<App />);
});

// snapshot
test("it matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
