import * as React from 'react';
import styled from 'styled-components';
import { IRepository } from './RepositoryInterfaces';

type RepositoryProps = IRepository;

const Repository: React.FC<RepositoryProps> = ({ avatar, name, author, stars }) => (
  <Element>
    <Img src={avatar} alt={name} />
    <span>{name}</span>
    <span>{author}</span>
    <span>{stars}</span>
  </Element>
);

export default Repository;

const Element = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 250px;
  padding: 20px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 19px;
  box-shadow: 0 15px 18px -3px rgba(0, 0, 0, 0.25);
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
