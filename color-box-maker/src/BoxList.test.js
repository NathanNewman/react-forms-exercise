import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import BoxList from './BoxList';

// smoke test
it('renders without crashing', function() {
  const div = document.createElement('div');
  ReactDOM.render(<BoxList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// snapshot
test('it matches snapshot', () => {
  const {asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});