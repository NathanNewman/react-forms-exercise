import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import ToDoList from "./ToDoList";

afterEach(cleanup);

// smoke test
it("renders without crashing", function() {
  render(<ToDoList />);
});

// snapshot
test("it matches snapshot", () => {
  const { asFragment } = render(<ToDoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("it adds a new todo", () => {
  const { getByText, getByLabelText } = render(<ToDoList />);
  const toDoInput = getByLabelText("Create New ToDo:");
  const addToDoButton = getByText("Add to list");
  fireEvent.change(toDoInput, { target: { value: "test" } });
  fireEvent.click(addToDoButton);
  const todo = getByText("test");
  expect(todo).toBeInTheDocument();
});

it("removes a todo", () => {
  const { getByText } = render(<ToDoList />);
  const removeButton = getByText("X");
  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});
