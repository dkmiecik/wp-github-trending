import * as React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <Content>
    <a href="https://gorzko.dev" target="_blank" rel="noopener noreferrer">
      Powered by{' Damian Kmiecik '}
    </a>
  </Content>
);

export default Footer;

const Content = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;
