import React from 'react';
import { render } from '@testing-library/react';
import Repositories from './Repositories';
import { FilterProvider } from '../filter/FilterContext';
import { SortProvider } from '../sort/SortContext';
import { SelectProvider } from '../select/SelectContext';

const setup = () => {
  const utils = render(
    <FilterProvider>
      <SelectProvider>
        <SortProvider>
          <Repositories />
        </SortProvider>
      </SelectProvider>
    </FilterProvider>,
  );
  const element = utils.getAllByText(/Nothing to show/i);
  return {
    element,
    ...utils,
  };
};

test('repositories element renders with props', () => {
  const { element } = setup();
  expect(element.length).toBe(1);
  expect(element[0]).toBeInTheDocument();
});

test('repositories element renders with one list element', () => {
  const { container } = setup();
  const elements = container.querySelectorAll('li');
  expect(elements.length).toBe(0);
});
