import * as React from 'react';
import { ISelect } from './SelectInterfaces';
import styled from 'styled-components';
import { useSelect } from './SelectContext';

type SelectProps = ISelect;

const Select: React.FC<SelectProps> = ({ options }) => {
  const {
    state: { language },
    dispatch,
  } = useSelect();
  return (
    <Container>
      <Title>Select programming language: </Title>
      {options && options.length ? (
        <Dropdown
          onChange={(e) => dispatch({ type: 'setLanguage', state: e.target.value })}
          value={language}
        >
          <option value={'all'}>Select language</option>
          {options.map((option) => (
            <option key={option.urlParam} value={option.urlParam}>
              {option.name}
            </option>
          ))}
        </Dropdown>
      ) : null}
    </Container>
  );
};

export default Select;

const Container = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.p`
  margin: 0;
  font-size: 16px;
`;

const Dropdown = styled.select`
  margin-top: 5px;
  border-radius: 6px;
  border: solid 1px #ede8e8;
  background-color: #f2f0f0;
  font-size: 10px;
  line-height: 1.4;
  color: #676666;
  padding: 7px 11px;
`;
