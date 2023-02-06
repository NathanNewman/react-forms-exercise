import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

// smoke test
it('renders without crashing', function() {
  const div = document.createElement('div');
  ReactDOM.render(<NewBoxForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// snapshot
test('it matches snapshot', () => {
  const {asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});