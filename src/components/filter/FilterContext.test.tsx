import React from 'react';
import { render } from '@testing-library/react';
import { FilterProvider } from './FilterContext';

const setup = () => {
  const utils = render(<FilterProvider />);
  return {
    ...utils,
  };
};

test('filter context provider renders', () => {
  const { container } = setup();
  expect(container).toBeInTheDocument();
});
