import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm';

// smoke test
it("renders without crashing", function() {
  render(<BoxList />);
});

// snapshot
test('it matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

// it('creates a new box', () => {
//   const { getByLabelText, queryByText } = render(<NewBoxForm />);

//   const heightInput = getByLabelText('Height');
//   const widthInput = getByLabelText('Width');
//   const backgroundColorInput = getByLabelText('Background Color');
//   const addBoxButton = queryByText("Add a new box!");

//   fireEvent.change(heightInput, { target: { value: '100px' } });
//   fireEvent.change(widthInput, { target: { value: '200px' } });
//   fireEvent.change(backgroundColorInput, { target: { value: 'red' } });
//   fireEvent.click(addBoxButton);

//   expect(createBoxMock).toHaveBeenCalledWith({
//     height: '100px',
//     width: '200px',
//     backgroundColor: 'red',
//     id: expect.any(String)
//   });
// });



