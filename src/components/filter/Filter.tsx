import * as React from 'react';
import styled from 'styled-components';
import RadioInput from '../common/RadioInput';
import { Filters, IFilterOptions } from './FilterInterfaces';
import { useFilter } from './FilterContext';

const filters: IFilterOptions[] = [
  {
    label: 'Daily',
    value: Filters.Daily,
  },
  {
    label: 'Weekly',
    value: Filters.Weekly,
  },
  {
    label: 'Monthly',
    value: Filters.Monthly,
  },
];

const Filter: React.FC = () => {
  const {
    state: { filter },
    dispatch,
  } = useFilter();
  return (
    <RadioGroup>
      {filters.map((input: IFilterOptions) => (
        <RadioInput
          key={input.value}
          input={input}
          value={filter}
          onChange={() => dispatch({ type: 'setFilter', state: input.value })}
        />
      ))}
    </RadioGroup>
  );
};

export default Filter;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 85px;
  margin-right: 20px;
`;
