import * as React from 'react';
import { Sorts } from './SortInterfaces';
import styled from 'styled-components';
import AscendingIcon from '../../assets/images/ascending-sort.svg';
import DescendingIcon from '../../assets/images/descending-sort.svg';
import { useSort } from './SortContext';

const Sort: React.FC = () => {
  const {
    state: { sort },
    dispatch,
  } = useSort();
  return (
    <Container>
      <Icon
        onClick={() =>
          dispatch({ type: 'setSortDirection', state: sort === Sorts.asc ? Sorts.desc : Sorts.asc })
        }
        value={sort}
      />
    </Container>
  );
};

export default Sort;

const Container = styled.div`
  position: relative;
  width: 50px;
`;

interface IconProps {
  value: Sorts;
}

const Icon = styled.i<IconProps>`
  background: url(${(props) => (props.value === Sorts.asc ? DescendingIcon : AscendingIcon)});
  width: 16px;
  height: 16px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;
