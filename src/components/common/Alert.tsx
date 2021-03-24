import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const Alert = () => (
  <Error>
    <Title>Connection error...</Title>
    <Description>Please try again later.</Description>
  </Error>
);

export default Alert;

const slide = keyframes`
100% { right: 20px; }
`;

const Error = styled.div`
  position: absolute;
  right: -150px;
  border: 1px solid #ccc;
  padding: 20px;
  top: 10px;
  background: #d31f62;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  width: 100px;
  color: #fff;
  animation: ${slide} 0.5s forwards;
  animation-delay: 0.5s;
`;

const Title = styled.h3`
  font-size: 14px;
`;

const Description = styled.p`
  font-size: 10px;
`;
