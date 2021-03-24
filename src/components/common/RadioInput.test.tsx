import React from 'react';
import { render } from '@testing-library/react';
import RadioInput from './RadioInput';
import { IRadioInput } from './RadioInputInterfaces';

const initialProps: IRadioInput = {
  input: {
    value: 'radio-input',
    label: 'Radio',
  },
  value: 'radio-input',
  onChange: (value: string) => null,
};

const setup = () => {
  const utils = render(<RadioInput {...initialProps} />);
  const input = utils.getByLabelText(/Radio/i);
  return {
    input,
    ...utils,
  };
};

test('radio input renders with props', () => {
  const { input } = setup();
  expect(input).toBeInTheDocument();
});



test('radio input renders with checked attribute', () => {
  const { input } = setup();
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('checked', '');
});
