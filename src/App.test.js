import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react link2', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/I was changeed here/i);
  expect(linkElement).toBeInTheDocument();
});