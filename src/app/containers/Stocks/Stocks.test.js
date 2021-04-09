import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Stocks from './Stocks';
import { renderComponent } from '../../test-utils';

renderComponent(
  <Stocks ticker="GSPC" />,
);

test('Renders Stocks correctly', () => {
  expect(screen.getByText('Apple Inc')).toBeInTheDocument();
  expect(screen.getByText('Microsoft')).toBeInTheDocument();
  expect(screen.getByText('Google')).toBeInTheDocument();
});
