import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import NewToDoForm from "./NewToDoForm";

afterEach(cleanup);

// smoke test
it("renders without crashing", function() {
  render(<NewToDoForm />);
});

// snapshot
test("it matches snapshot", () => {
  const { asFragment } = render(<NewToDoForm />);
  expect(asFragment()).toMatchSnapshot();
});

it("creates a new todo", () => {
  const createToDo = jest.fn();
  const { getByLabelText, getByText } = render(
    <NewToDoForm add={createToDo} />
  );
  const toDoInput = getByLabelText("Create New ToDo:");
  const button = getByText("Add to list");
  fireEvent.change(toDoInput, { target: { value: "test" } });
  fireEvent.click(button);
  expect(createToDo).toHaveBeenCalledWith("test");
});
