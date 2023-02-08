import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

afterEach(cleanup);

// smoke test
it("renders without crashing", function() {
  render(<NewBoxForm />);
});

// snapshot
test("it matches snapshot", () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("creates a new box", () => {
  const createBoxMock = jest.fn();
  const { getByLabelText, queryByText } = render(
    <NewBoxForm createBox={createBoxMock} />
  );

  const heightInput = getByLabelText("Height");
  const widthInput = getByLabelText("Width");
  const backgroundColorInput = getByLabelText("Background Color");
  const addBoxButton = queryByText("Add a new box!");

  fireEvent.change(heightInput, { target: { value: "100" } });
  fireEvent.change(widthInput, { target: { value: "200" } });
  fireEvent.change(backgroundColorInput, { target: { value: "red" } });
  fireEvent.click(addBoxButton);

  expect(createBoxMock).toHaveBeenCalledWith({
    height: "100",
    width: "200",
    backgroundColor: "red",
    id: expect.any(String),
  });
});
