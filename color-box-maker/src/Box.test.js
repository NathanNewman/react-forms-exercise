import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Box from './Box';

// smoke test
it('renders without crashing', function() {
  const div = document.createElement('div');
  ReactDOM.render(<Box />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// snapshot
test('it matches snapshot', () => {
  const {asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});