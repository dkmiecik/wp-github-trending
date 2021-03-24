import * as React from 'react';
import styled from 'styled-components';
import { IRadioInput } from './RadioInputInterfaces';

type RadioInputProps = IRadioInput;

const RadioInput: React.FC<RadioInputProps> = ({ input, value, onChange }) => (
  <Radio>
    <Label htmlFor={input.value}>{input.label}</Label>
    <Input
      id={input.value}
      checked={input.value === value}
      data-checked={input.value === value}
      value={input.value}
      type="radio"
      onChange={(e) => onChange(e.target.value)}
    />
  </Radio>
);

export default RadioInput;

const Radio = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label``;

const Input = styled.input``;
