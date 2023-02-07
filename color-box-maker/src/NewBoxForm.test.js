import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

// smoke test
it("renders without crashing", function() {
  render(<NewBoxForm />);
});

// snapshot
test('it matches snapshot', () => {
  const {asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

it('creates a new box', () => {
  const createBoxMock = jest.fn();
  const { getByLabelText, queryByText } = render(<NewBoxForm />);

  const heightInput = getByLabelText('Height');
  const widthInput = getByLabelText('Width');
  const backgroundColorInput = getByLabelText('Background Color');
  const addBoxButton = queryByText("Add a new box!");

  fireEvent.change(heightInput, {value: '100px'});
  fireEvent.change(widthInput, { value: '200px' });
  fireEvent.change(backgroundColorInput, { value: 'red' });
  fireEvent.click(addBoxButton);

  expect(createBoxMock).toHaveBeenCalledWith({
    height: '100px',
    width: '200px',
    backgroundColor: 'red',
    id: expect.any(String)
  });
});