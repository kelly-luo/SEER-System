import React from 'react';
import { render } from '@testing-library/react';
import App from '../Components/App';

test('Comment Maker', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/comments/i);
  expect(linkElement).toBeInTheDocument();
});
