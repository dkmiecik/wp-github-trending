import React from 'react';
import { render } from '@testing-library/react';
import Filter from './Filter';
import { FilterProvider } from './FilterContext';

const setup = () => {
  const utils = render(
    <FilterProvider>
      <Filter />
    </FilterProvider>,
  );
  const input = utils.getByLabelText(/Daily/i);
  return {
    input,
    ...utils,
  };
};

test('filter renders with props', () => {
  const { input } = setup();
  expect(input).toBeInTheDocument();
});

test('filter renders with radio type inputs', () => {
  const { container } = setup();
  const inputs = container.querySelectorAll('input[type="radio"]');
  expect(inputs.length).toBe(3);
});
