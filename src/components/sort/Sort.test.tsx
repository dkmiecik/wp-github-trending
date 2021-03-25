import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SortProvider } from './SortContext';
import Sort from './Sort';
const setup = () => {
  const utils = render(
    <SortProvider>
      <Sort />
    </SortProvider>,
  );
  const element = utils.container.firstChild as HTMLElement;
  return {
    element,
    ...utils,
  };
};

test('sort element renders', () => {
  const { element } = setup();
  expect(element).toBeInTheDocument();
});

test('sort element change value after click', () => {
  const { element } = setup();
  const icon = element.querySelector('i') as HTMLElement;
  expect(icon).toHaveAttribute('value');
  expect(icon.getAttribute('value')).toBe('0');
  fireEvent.click(icon as Element);
  expect(icon.getAttribute('value')).toBe('1');
});
