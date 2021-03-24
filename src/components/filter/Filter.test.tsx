import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Filter from './Filter';
import { FilterProvider } from './FilterContext';
import {Filters} from "./FilterInterfaces";

const setup = () => {
  const utils = render(
    <FilterProvider>
      <Filter />
    </FilterProvider>,
  );
  const input = utils.getByLabelText(/Daily/i);
  const inputMonthly = utils.getByLabelText(/Monthly/i);
  return {
    input,
    inputMonthly,
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

test('filter changes value after click', () => {
  const { inputMonthly } = setup();
  fireEvent.click(inputMonthly as Element);
  expect(inputMonthly).toHaveAttribute('data-checked');
  expect(inputMonthly.getAttribute('data-checked')).toBe('true');
});
