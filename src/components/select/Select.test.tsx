import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Select from './Select';
import { SelectProvider } from './SelectContext';
import { IOption } from './SelectInterfaces';

const options: IOption[] = [
  {
    urlParam: 'java',
    name: 'Java',
  },
  {
    urlParam: 'javascript',
    name: 'JavaScript',
  },
];
const setup = () => {
  const utils = render(
    <SelectProvider>
      <Select options={options} />
    </SelectProvider>,
  );
  const element = utils.getAllByText(/Select language/i);
  return {
    element,
    ...utils,
  };
};

test('select element renders', () => {
  const { element } = setup();
  expect(element.length).toBe(1);
  expect(element[0]).toBeInTheDocument();
});

test('select element renders with three options', () => {
  const { container } = setup();
  const elements = container.querySelectorAll('option');
  expect(elements.length).toBe(3);
});

test('select element has selected option after click', () => {
  const { container, getByTestId } = setup();
  fireEvent.change(getByTestId('select'), { target: { value: 'javascript' } });
  const options = container.querySelectorAll('option');
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeFalsy();
  expect(options[2].selected).toBeTruthy();
});
