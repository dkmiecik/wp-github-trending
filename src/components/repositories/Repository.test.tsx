import React from 'react';
import { render } from '@testing-library/react';
import Repository from './Repository';
import { IRepository } from './RepositoryInterfaces';

const initialProps: IRepository = {
  avatar: '',
  author: 'Test',
  name: 'Repository',
  stars: 123,
};

const setup = () => {
  const utils = render(<Repository {...initialProps} />);
  const element = utils.getAllByText(/Test/i);
  const img = utils.getByAltText(/Repository/i);
  return {
    element,
    img,
    ...utils,
  };
};

test('repository element renders with props', () => {
  const { element } = setup();
  expect(element.length).toBe(1);
  expect(element[0]).toBeInTheDocument();
});

test('repository element renders with img having alt text', () => {
  const { img } = setup();
  expect(img).toBeInTheDocument();
});
